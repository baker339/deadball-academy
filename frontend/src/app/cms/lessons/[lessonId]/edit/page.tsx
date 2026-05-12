"use client";

import Link from "next/link";
import { useCallback, useEffect, useId, useLayoutEffect, useMemo, useRef, useState } from "react";
import { BlockMath } from "react-katex";
import { useParams } from "next/navigation";
import EditorRubricChecklist from "../../../../../components/EditorRubricChecklist";
import LessonExperienceView, { type ComposerSectionHighlight } from "../../../../../components/LessonExperienceView";
import { useAuth } from "../../../../../components/AuthProvider";
import { buildCmsPreviewLessonDocument, parseLessonKeySlugs } from "../../../../../content/cmsPreviewLesson";
import {
  cmsCreateModule,
  cmsCreateRevision,
  cmsCreateStep,
  cmsHydrateLiveLessonDraft,
  cmsModules,
  cmsReorderModules,
  cmsReorderSteps,
  cmsSteps,
  cmsUpdateModule,
  cmsUpdateStep,
  type CmsModule,
  type CmsStep,
} from "../../../../../lib/cms";
import {
  authorBlocksToLessonDraft,
  defaultLessonDocumentDraft,
  lessonDraftToAuthorBlocks,
  type AuthorBlock,
  type AuthorBlockType,
  type LessonDocumentDraft,
} from "../../../../../content/lessonTypes";
import { lessonHeaderDisplayTitle } from "../../../../../content/lessonTitleDisambiguation";

const breadcrumbLinkClass = "ui-link-muted";

const emptyDraft: LessonDocumentDraft = defaultLessonDocumentDraft();
const blockPalette: Array<{ type: AuthorBlockType; title: string }> = [
  { type: "text", title: "Text" },
  { type: "info", title: "Info Callout" },
  { type: "why_this_matters", title: "Why This Matters" },
  { type: "diagram", title: "Diagram" },
  { type: "latex", title: "LaTeX" },
  { type: "checkpoint", title: "Checkpoint" },
];

export default function CmsLessonEditPage() {
  return <ComposerV2 />;
}

function ComposerV2() {
  const params = useParams<{ lessonId: string }>();
  const lessonId = Number(params.lessonId);
  const { token } = useAuth();

  const [draft, setDraft] = useState<LessonDocumentDraft>(emptyDraft);
  const [blocks, setBlocks] = useState<AuthorBlock[]>(() => lessonDraftToAuthorBlocks(emptyDraft));
  const [selectedBlockId, setSelectedBlockId] = useState<string | null>(null);
  const [history, setHistory] = useState<AuthorBlock[][]>([]);
  const [future, setFuture] = useState<AuthorBlock[][]>([]);
  const [autosaveState, setAutosaveState] = useState<"idle" | "saving" | "saved" | "error">("idle");
  const [lastSavedAt, setLastSavedAt] = useState<string>("");
  const [error, setError] = useState("");
  const [loadError, setLoadError] = useState("");
  const [saving, setSaving] = useState(false);
  const [isHydrating, setIsHydrating] = useState(true);
  const [isHydrated, setIsHydrated] = useState(false);
  const [isDirty, setIsDirty] = useState(false);
  const [hydrateAttempt, setHydrateAttempt] = useState(0);
  const [modules, setModules] = useState<CmsModule[]>([]);
  const [steps, setSteps] = useState<CmsStep[]>([]);
  const [newModuleTitle, setNewModuleTitle] = useState("");
  const [newStepTitleByModule, setNewStepTitleByModule] = useState<Record<number, string>>({});
  type OutlineSelection = { kind: "module"; id: number } | { kind: "step"; id: number } | { kind: "block"; id: string } | null;
  const [outline, setOutline] = useState<OutlineSelection>(null);
  const [dragModuleId, setDragModuleId] = useState<number | null>(null);
  const [dragStep, setDragStep] = useState<{ moduleId: number; stepId: number } | null>(null);
  const [studioToolsOpen, setStudioToolsOpen] = useState(() => {
    if (typeof window === "undefined") return false;
    try {
      return sessionStorage.getItem("cms-studio-tools-open") === "1";
    } catch {
      return false;
    }
  });
  const studioToolsTriggerRef = useRef<HTMLButtonElement>(null);
  const studioDialogRef = useRef<HTMLDialogElement>(null);
  const studioCloseButtonRef = useRef<HTMLButtonElement>(null);
  const studioToolsPanelId = useId().replace(/:/g, "");
  const studioToolsHeadingId = useId();

  useEffect(() => {
    try {
      if (studioToolsOpen) sessionStorage.setItem("cms-studio-tools-open", "1");
      else sessionStorage.removeItem("cms-studio-tools-open");
    } catch {
      /* ignore */
    }
  }, [studioToolsOpen]);

  useEffect(() => {
    const dialog = studioDialogRef.current;
    if (!dialog) return;
    const onDialogClose = () => {
      setStudioToolsOpen(false);
      studioToolsTriggerRef.current?.focus();
    };
    dialog.addEventListener("close", onDialogClose);
    return () => dialog.removeEventListener("close", onDialogClose);
  }, []);

  useLayoutEffect(() => {
    const dialog = studioDialogRef.current;
    if (!dialog) return;
    if (studioToolsOpen) {
      if (!dialog.open) {
        try {
          dialog.showModal();
        } catch {
          /* showModal while already open */
        }
        requestAnimationFrame(() => studioCloseButtonRef.current?.focus());
      }
    } else if (dialog.open) {
      dialog.close();
    }
  }, [studioToolsOpen]);

  const completeness = useMemo(() => {
    const missing: string[] = [];
    if (!draft.key) missing.push("key");
    if (!draft.title) missing.push("title");
    if (!draft.trackTitle) missing.push("trackTitle");
    if (!draft.unitTitle) missing.push("unitTitle");
    if (!draft.whyItMatters) missing.push("whyItMatters");
    if (!draft.lessonOpener) missing.push("lessonOpener");
    if (draft.objectives.length === 0) missing.push("objectives");
    if (draft.prerequisites.length === 0) missing.push("prerequisites");
    if (draft.conceptChunks.length === 0 || !draft.conceptChunks[0]?.heading) missing.push("conceptChunks");
    if (!draft.lessonSummary) missing.push("lessonSummary");
    const score = Math.max(0, 100 - missing.length * 10);
    return { score, missing };
  }, [draft]);

  const selectedBlock = useMemo(() => blocks.find((block) => block.id === selectedBlockId) ?? null, [blocks, selectedBlockId]);
  const sortedBlocks = useMemo(() => [...blocks].sort((a, b) => a.order - b.order), [blocks]);
  const previewDocument = useMemo(() => buildCmsPreviewLessonDocument(draft, blocks), [draft, blocks]);
  const previewSlugs = useMemo(() => parseLessonKeySlugs(previewDocument.key), [previewDocument.key]);

  const whyBlock = useMemo(() => sortedBlocks.find((b) => b.type === "why_this_matters"), [sortedBlocks]);
  const openerBlock = useMemo(() => sortedBlocks.find((b) => b.type === "info" && b.title === "Lesson Opener"), [sortedBlocks]);
  const firstConceptBlocks = useMemo(() => {
    const openerIdx = sortedBlocks.findIndex((b) => b.type === "info" && b.title === "Lesson Opener");
    if (openerIdx < 0) return { explain: undefined as (typeof sortedBlocks)[number] | undefined, formal: undefined as (typeof sortedBlocks)[number] | undefined };
    const after = sortedBlocks.slice(openerIdx + 1);
    const explain = after.find((b) => b.type === "text" && b.title !== "Lesson Summary");
    if (!explain || explain.type !== "text") return { explain: undefined, formal: undefined };
    const formal = sortedBlocks.find((b) => b.type === "info" && b.title === `${explain.title} Formal Note`);
    return { explain, formal };
  }, [sortedBlocks]);

  const composerHighlight = useMemo((): ComposerSectionHighlight => {
    const b = selectedBlock;
    if (!b) return null;
    if (b.type === "why_this_matters") return { kind: "why" };
    if (b.type === "info" && b.title === "Lesson Opener") return { kind: "opener" };
    if (b.type === "text" && b.title !== "Lesson Summary") {
      const i2 = draft.conceptChunks.findIndex((c, idx) => (c.heading || `Concept ${idx + 1}`) === b.title);
      if (i2 >= 0) return { kind: "concept", index: i2 };
    }
    if (b.type === "info" && b.title.endsWith(" Formal Note")) {
      const base = b.title.replace(" Formal Note", "");
      const i2 = draft.conceptChunks.findIndex((c, idx) => (c.heading || `Concept ${idx + 1}`) === base);
      if (i2 >= 0) return { kind: "concept", index: i2 };
    }
    return null;
  }, [selectedBlock, draft.conceptChunks]);

  const stepsByModule = useMemo(() => {
    const map = new Map<number, CmsStep[]>();
    for (const step of steps) {
      const arr = map.get(step.module_id) ?? [];
      arr.push(step);
      map.set(step.module_id, arr);
    }
    for (const arr of map.values()) {
      arr.sort((a, b) => a.step_order - b.step_order);
    }
    return map;
  }, [steps]);

  const refreshModulesSteps = useCallback(async () => {
    if (!token) return;
    const lessonModules = await cmsModules(token, lessonId);
    setModules(lessonModules);
    if (lessonModules.length === 0) {
      setSteps([]);
      return;
    }
    const allSteps = await cmsSteps(token);
    const moduleIds = new Set(lessonModules.map((m) => m.id));
    setSteps(allSteps.filter((s) => moduleIds.has(s.module_id)));
  }, [token, lessonId]);

  const sortedModules = useMemo(() => [...modules].sort((a, b) => a.module_order - b.module_order), [modules]);

  const applyModuleReorder = useCallback(
    async (draggedId: number, targetId: number) => {
      if (!token || draggedId === targetId) return;
      const ordered = [...sortedModules];
      const from = ordered.findIndex((m) => m.id === draggedId);
      const to = ordered.findIndex((m) => m.id === targetId);
      if (from < 0 || to < 0) return;
      const next = [...ordered];
      const [item] = next.splice(from, 1);
      next.splice(to, 0, item);
      await cmsReorderModules(token, next.map((m) => m.id));
      await refreshModulesSteps();
    },
    [token, sortedModules, refreshModulesSteps],
  );

  const applyStepReorder = useCallback(
    async (moduleId: number, draggedId: number, targetId: number) => {
      if (!token || draggedId === targetId) return;
      const list = [...(stepsByModule.get(moduleId) ?? [])].sort((a, b) => a.step_order - b.step_order);
      const from = list.findIndex((s) => s.id === draggedId);
      const to = list.findIndex((s) => s.id === targetId);
      if (from < 0 || to < 0) return;
      const next = [...list];
      const [item] = next.splice(from, 1);
      next.splice(to, 0, item);
      await cmsReorderSteps(token, next.map((s) => s.id));
      await refreshModulesSteps();
    },
    [token, stepsByModule, refreshModulesSteps],
  );

  const replaceEditorState = useCallback((nextDraft: LessonDocumentDraft, nextBlocks?: AuthorBlock[]) => {
    const resolvedBlocks = (nextBlocks ?? lessonDraftToAuthorBlocks(nextDraft)).map((block, index) => ({ ...block, order: index }));
    setDraft(nextDraft);
    setBlocks(resolvedBlocks);
    setSelectedBlockId(null);
    setHistory([]);
    setFuture([]);
    setError("");
    setAutosaveState("idle");
    setIsDirty(false);
  }, []);

  const hydrateLesson = useCallback(async () => {
    if (!token || !lessonId) return;
    try {
      setIsHydrating(true);
      setLoadError("");
      const hydrated = await cmsHydrateLiveLessonDraft(token, lessonId);
      replaceEditorState(hydrated.draft);
      try {
        await refreshModulesSteps();
      } catch {
        setModules([]);
        setSteps([]);
      }
      setIsHydrated(true);
    } catch (err) {
      setLoadError(
        err instanceof Error
          ? err.message
          : "Failed to load lesson. The backend did not return a valid lesson draft.",
      );
      setIsHydrated(false);
    } finally {
      setIsHydrating(false);
    }
  }, [lessonId, replaceEditorState, refreshModulesSteps, token]);

  useEffect(() => {
    void hydrateLesson();
  }, [hydrateLesson, hydrateAttempt]);

  const applyBlocks = useCallback((nextBlocks: AuthorBlock[]) => {
    setHistory((prev) => [...prev, blocks]);
    setFuture([]);
    setBlocks(nextBlocks.map((block, index) => ({ ...block, order: index })));
    setDraft((prev) => authorBlocksToLessonDraft(prev, nextBlocks));
    setIsDirty(true);
    setAutosaveState("idle");
  }, [blocks]);

  const updateBlock = useCallback((blockId: string, updater: (block: AuthorBlock) => AuthorBlock) => {
    applyBlocks(blocks.map((block) => (block.id === blockId ? updater(block) : block)));
  }, [applyBlocks, blocks]);

  const insertBlock = useCallback((type: AuthorBlockType, index: number) => {
    const newBlock: AuthorBlock =
      type === "checkpoint"
        ? { id: `block-${Date.now()}`, order: index, type, title: "New Checkpoint", prompt: "", answer: "", explanation: "" }
        : type === "diagram"
          ? { id: `block-${Date.now()}`, order: index, type, title: "New Diagram", src: "", alt: "", caption: "", placeholder: true }
          : type === "latex"
            ? { id: `block-${Date.now()}`, order: index, type, title: "New Equation", equation: "", explanation: "" }
            : type === "why_this_matters"
              ? { id: `block-${Date.now()}`, order: index, type, title: "Why This Matters", text: "" }
              : type === "info"
                ? { id: `block-${Date.now()}`, order: index, type, title: "Info", tone: "callout", text: "" }
                : { id: `block-${Date.now()}`, order: index, type, title: "Text", text: "" };
    const next = [...blocks.slice(0, index), newBlock, ...blocks.slice(index)];
    applyBlocks(next);
    setSelectedBlockId(newBlock.id);
  }, [applyBlocks, blocks]);

  const moveBlock = useCallback((blockId: string, direction: -1 | 1) => {
    const index = blocks.findIndex((block) => block.id === blockId);
    const target = index + direction;
    if (index < 0 || target < 0 || target >= blocks.length) return;
    const next = [...blocks];
    const [item] = next.splice(index, 1);
    next.splice(target, 0, item);
    applyBlocks(next);
  }, [applyBlocks, blocks]);

  const removeBlock = useCallback((blockId: string) => {
    if (!window.confirm("Delete this block?")) return;
    applyBlocks(blocks.filter((block) => block.id !== blockId));
    if (selectedBlockId === blockId) setSelectedBlockId(null);
  }, [applyBlocks, blocks, selectedBlockId]);

  const duplicateBlock = useCallback((blockId: string) => {
    const index = blocks.findIndex((block) => block.id === blockId);
    if (index < 0) return;
    const clone = { ...blocks[index], id: `block-${Date.now()}`, order: index + 1 };
    applyBlocks([...blocks.slice(0, index + 1), clone, ...blocks.slice(index + 1)]);
  }, [applyBlocks, blocks]);

  function validateLatex(eq: string): string | null {
    if (!eq.trim()) return "Equation is empty.";
    let balance = 0;
    for (const ch of eq) {
      if (ch === "{") balance += 1;
      if (ch === "}") balance -= 1;
      if (balance < 0) return "Unbalanced braces in LaTeX.";
    }
    return balance === 0 ? null : "Unbalanced braces in LaTeX.";
  }

  const saveRevision = useCallback(async () => {
    if (!token || !isHydrated) return;
    try {
      setSaving(true);
      setAutosaveState("saving");
      setError("");
      await cmsCreateRevision(token, lessonId, draft);
      setAutosaveState("saved");
      setLastSavedAt(new Date().toLocaleTimeString());
      setIsDirty(false);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Save failed");
      setAutosaveState("error");
    } finally {
      setSaving(false);
    }
  }, [draft, isHydrated, lessonId, token]);

  useEffect(() => {
    if (!isHydrated || !isDirty) return;
    const id = window.setTimeout(() => {
      void saveRevision();
    }, 1200);
    return () => window.clearTimeout(id);
  }, [blocks, isDirty, isHydrated, saveRevision]);

  useEffect(() => {
    function onKeydown(event: KeyboardEvent) {
      if (event.key === "/" && !event.metaKey && !event.ctrlKey) {
        event.preventDefault();
        insertBlock("text", blocks.length);
      }
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "z") {
        event.preventDefault();
        if (event.shiftKey) {
          const next = future[future.length - 1];
          if (!next) return;
          setFuture((prev) => prev.slice(0, -1));
          setHistory((prev) => [...prev, blocks]);
          setBlocks(next);
          setDraft((prev) => authorBlocksToLessonDraft(prev, next));
          setIsDirty(true);
          setAutosaveState("idle");
          return;
        }
        const prevState = history[history.length - 1];
        if (!prevState) return;
        setHistory((prev) => prev.slice(0, -1));
        setFuture((prev) => [...prev, blocks]);
        setBlocks(prevState);
        setDraft((prev) => authorBlocksToLessonDraft(prev, prevState));
        setIsDirty(true);
        setAutosaveState("idle");
      }
      if (!selectedBlockId) return;
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "d") {
        event.preventDefault();
        duplicateBlock(selectedBlockId);
      }
      if (event.altKey && event.key === "ArrowUp") {
        event.preventDefault();
        moveBlock(selectedBlockId, -1);
      }
      if (event.altKey && event.key === "ArrowDown") {
        event.preventDefault();
        moveBlock(selectedBlockId, 1);
      }
      if ((event.key === "Backspace" || event.key === "Delete") && !event.metaKey && !event.ctrlKey) {
        event.preventDefault();
        removeBlock(selectedBlockId);
      }
    }
    window.addEventListener("keydown", onKeydown);
    return () => window.removeEventListener("keydown", onKeydown);
  }, [blocks, duplicateBlock, future, history, insertBlock, moveBlock, removeBlock, selectedBlockId]);

  const outlineModule = useMemo(
    () => (outline?.kind === "module" ? modules.find((m) => m.id === outline.id) ?? null : null),
    [outline, modules],
  );
  const outlineStep = useMemo(
    () => (outline?.kind === "step" ? steps.find((s) => s.id === outline.id) ?? null : null),
    [outline, steps],
  );

  if (isHydrating) {
    return (
      <div className="py-8">
        <div className="ui-container ui-lesson-max">
          <div className="mb-6 h-4 w-3/4 max-w-lg animate-pulse rounded bg-neutral-200" />
          <div className="mb-4 h-10 w-full animate-pulse rounded-lg bg-neutral-100" />
        </div>
        <div className="ui-container ui-lesson-max py-10">
          <div className="h-48 animate-pulse rounded-xl bg-neutral-100" />
        </div>
      </div>
    );
  }

  if (loadError) {
    return (
      <div className="rounded-xl border border-red-200 bg-red-50 p-6 text-red-900">
        <h1 className="text-lg font-semibold">Lesson load failed</h1>
        <p className="mt-2 text-sm">{loadError}</p>
        <p className="mt-2 text-sm">
          This editor requires a non-empty, valid persisted lesson draft payload for hydration.
        </p>
        <p className="mt-2 text-sm">If this error references an empty draft, run the forced lesson repopulation script.</p>
        <button
          type="button"
          onClick={() => setHydrateAttempt((value) => value + 1)}
          className="ui-focus ui-btn-primary mt-4"
        >
          Retry load
        </button>
      </div>
    );
  }

  const proseTextareaClass =
    "lesson-prose ui-focus min-h-[7rem] w-full resize-y rounded-lg border border-[color:var(--color-border)] bg-[color:var(--color-surface)] px-3 py-2 text-sm leading-relaxed text-[color:var(--color-reading-fg)] shadow-inner focus:ring-2 focus:ring-[color:var(--color-ring)]";

  const displayTitle = lessonHeaderDisplayTitle(previewSlugs.trackSlug, previewDocument.title);
  const isPlaceholderSlugs =
    previewSlugs.trackSlug === "preview" && previewSlugs.unitSlug === "preview" && previewSlugs.lessonSlug === "draft";
  const learnTrackHref = isPlaceholderSlugs ? "/learn/library" : `/learn/library/${previewSlugs.trackSlug}`;
  const learnUnitHref = isPlaceholderSlugs ? "/learn/library" : `/learn/library/${previewSlugs.trackSlug}/${previewSlugs.unitSlug}`;

  const introEditSlots = {
    ...(whyBlock && whyBlock.type === "why_this_matters"
      ? {
          why: (
            <textarea
              className={proseTextareaClass}
              value={whyBlock.text}
              onChange={(e) => updateBlock(whyBlock.id, (prev) => ({ ...prev, text: e.target.value }))}
            />
          ),
        }
      : {}),
    ...(openerBlock && openerBlock.type === "info" && openerBlock.title === "Lesson Opener"
      ? {
          opener: (
            <textarea
              className={proseTextareaClass}
              value={openerBlock.text}
              onChange={(e) => updateBlock(openerBlock.id, (prev) => ({ ...prev, text: e.target.value }))}
            />
          ),
        }
      : {}),
  };

  const explain0 = firstConceptBlocks.explain;
  const formal0 = firstConceptBlocks.formal;
  const conceptCardSlots =
    explain0 &&
    explain0.type === "text" &&
    formal0 &&
    formal0.type === "info" &&
    formal0.title === `${explain0.title} Formal Note`
      ? {
          0: {
            guided: (
              <textarea
                className={proseTextareaClass}
                value={explain0.text}
                onChange={(e) => updateBlock(explain0.id, (prev) => ({ ...prev, text: e.target.value }))}
              />
            ),
            formal: (
              <textarea
                className={proseTextareaClass}
                value={formal0.text}
                onChange={(e) => updateBlock(formal0.id, (prev) => ({ ...prev, text: e.target.value }))}
              />
            ),
          },
        }
      : undefined;

  return (
    <div className="py-8">
      <div className="ui-container ui-lesson-max">
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-[color:var(--color-muted)]">
          <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <li>
              <Link href="/learn/library" className={breadcrumbLinkClass}>
                Lesson library
              </Link>
            </li>
            <li className="text-[color:var(--color-muted)] opacity-70" aria-hidden="true">
              /
            </li>
            <li>
              <Link href={learnTrackHref} className={breadcrumbLinkClass}>
                {previewDocument.trackTitle}
              </Link>
            </li>
            <li className="text-[color:var(--color-muted)] opacity-70" aria-hidden="true">
              /
            </li>
            <li>
              <Link href={learnUnitHref} className={breadcrumbLinkClass}>
                {previewDocument.unitTitle}
              </Link>
            </li>
            <li className="text-[color:var(--color-muted)] opacity-70" aria-hidden="true">
              /
            </li>
            <li className="font-medium text-[color:var(--color-fg)] sm:max-w-[32rem] truncate" title={displayTitle} aria-current="page">
              {displayTitle}
            </li>
          </ol>
          <p className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-[color:var(--color-muted)]">
            <Link href="/learn/library" className={breadcrumbLinkClass}>
              Back to lesson library
            </Link>
            <span className="opacity-50" aria-hidden>
              |
            </span>
            <Link href="/cms/lessons" className={breadcrumbLinkClass}>
              CMS lessons
            </Link>
            <span className="ml-1 rounded-full border border-amber-200 bg-amber-50 px-2 py-0.5 text-xs font-semibold uppercase tracking-wide text-amber-900">
              Draft editor
            </span>
          </p>
        </nav>

        <div className="sticky top-0 z-30 mb-6 flex flex-col gap-2 rounded-lg border border-[color:var(--color-border)] bg-[color:var(--color-surface)]/95 px-3 py-2 shadow-sm backdrop-blur-sm sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-x-2 sm:gap-y-2">
          <span className="text-xs text-[color:var(--color-muted)] sm:text-sm">Unpublished draft — learner layout preview.</span>
          <div className="flex flex-wrap items-center gap-x-2 gap-y-2">
            <button
              ref={studioToolsTriggerRef}
              type="button"
              className="ui-focus ui-btn-secondary rounded-xl px-3 py-2 text-xs font-semibold"
              aria-expanded={studioToolsOpen}
              aria-controls={`cms-studio-tools-panel-${studioToolsPanelId}`}
              onClick={() => setStudioToolsOpen((open) => !open)}
            >
              Studio tools
            </button>
            <span className="rounded-full bg-neutral-100 px-2.5 py-1 text-xs font-medium text-[color:var(--color-muted)]">Autosave: {autosaveState}</span>
            {lastSavedAt ? (
              <span className="rounded-full bg-neutral-100 px-2.5 py-1 text-xs text-[color:var(--color-muted)]">Saved {lastSavedAt}</span>
            ) : null}
            <span className="rounded-full bg-neutral-100 px-2.5 py-1 text-xs text-[color:var(--color-muted)]">Completeness {completeness.score}%</span>
            <span className="rounded-full bg-neutral-100 px-2.5 py-1 text-xs text-[color:var(--color-muted)]">{isDirty ? "Unsaved" : "Synced"}</span>
            <button
              type="button"
              onClick={() => void saveRevision()}
              disabled={saving || !isHydrated || !isDirty}
              className="ui-focus ui-btn-primary rounded-xl px-4 py-2 text-xs font-semibold disabled:opacity-50"
            >
              {saving ? "Saving…" : "Save draft"}
            </button>
          </div>
        </div>
      </div>

      <LessonExperienceView
        document={previewDocument}
        trackSlug={previewSlugs.trackSlug}
        unitSlug={previewSlugs.unitSlug}
        lessonSlug={previewSlugs.lessonSlug}
        context="composer"
        outerClassName="ui-container ui-lesson-max py-10"
        introEditSlots={introEditSlots}
        conceptCardSlots={conceptCardSlots}
        composerHighlight={composerHighlight}
      />

      {error ? (
        <div className="ui-container ui-lesson-max py-2">
          <p className="text-sm text-red-700">{error}</p>
        </div>
      ) : null}

      <dialog
        ref={studioDialogRef}
        id={`cms-studio-tools-panel-${studioToolsPanelId}`}
        aria-modal="true"
        aria-labelledby={studioToolsHeadingId}
        className="cms-studio-tools-dialog"
        onClick={(e) => {
          if (e.target === studioDialogRef.current) studioDialogRef.current?.close();
        }}
      >
        <div
          className="cms-studio-tools-dialog-panel ml-auto flex h-full max-h-[100dvh] w-full max-w-none flex-col overflow-y-auto border-l border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-4 pb-[max(1rem,env(safe-area-inset-bottom))] pt-[max(0.75rem,env(safe-area-inset-top))] shadow-2xl motion-safe:transition-transform motion-safe:duration-200 motion-safe:ease-out sm:max-w-md"
          onClick={(e) => e.stopPropagation()}
        >
        <div className="mb-3 flex min-h-[44px] items-center justify-between gap-2 border-b border-[color:var(--color-border)] pb-3">
          <h2 id={studioToolsHeadingId} className="text-sm font-bold text-[color:var(--color-fg)]">
            Studio tools
          </h2>
          <button
            ref={studioCloseButtonRef}
            type="button"
            className="ui-focus min-h-[44px] min-w-[44px] rounded-lg border border-[color:var(--color-border)] px-3 py-2 text-xs font-semibold"
            onClick={() => setStudioToolsOpen(false)}
          >
            Close
          </button>
        </div>

        <details className="mb-4 rounded-lg border border-[color:var(--color-border)] bg-[color:var(--color-surface-subtle)] p-2 text-xs text-[color:var(--color-muted)]">
          <summary className="cursor-pointer font-semibold text-[color:var(--color-fg)]">Keyboard shortcuts</summary>
          <p className="mt-2">
            <kbd className="rounded bg-neutral-100 px-1">/</kbd> add text block · <kbd className="rounded bg-neutral-100 px-1">⌘D</kbd> duplicate · Alt+↑↓ move
            block · Delete removes selected block.
          </p>
        </details>

        <div className="border-b border-[color:var(--color-border)] pb-3">
          <h3 className="text-xs font-bold uppercase tracking-wide text-[color:var(--color-muted)]">Lesson structure</h3>
          <p className="mt-1 text-xs leading-relaxed text-[color:var(--color-muted)] sm:text-sm">
            Drag modules to reorder. Drag steps within a module. Authoring outline—not the learner stepper.
          </p>
        </div>

        <div className="mt-3 flex gap-2">
          <input
            value={newModuleTitle}
            onChange={(e) => setNewModuleTitle(e.target.value)}
            className="min-w-0 flex-1 rounded-xl border border-[color:var(--color-border)] px-3 py-2 text-sm shadow-inner"
            placeholder="New module"
          />
          <button
            type="button"
            className="ui-focus ui-btn-primary shrink-0 rounded-xl px-3 py-2 text-sm"
            onClick={async () => {
              if (!token || !newModuleTitle.trim()) return;
              const title = newModuleTitle.trim();
              await cmsCreateModule(token, {
                lesson_id: lessonId,
                title,
                slug: title.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
                module_order: sortedModules.length + 1,
                module_type: "custom",
              });
              setNewModuleTitle("");
              await refreshModulesSteps();
            }}
          >
            Add
          </button>
        </div>

        <div className="mt-4 max-h-64 space-y-2 overflow-y-auto pr-1">
          {sortedModules.map((module) => (
            <div
              key={module.id}
              draggable
              onDragStart={() => setDragModuleId(module.id)}
              onDragEnd={() => setDragModuleId(null)}
              onDragOver={(e) => {
                e.preventDefault();
                e.dataTransfer.dropEffect = "move";
              }}
              onDrop={async (e) => {
                e.preventDefault();
                if (dragModuleId) await applyModuleReorder(dragModuleId, module.id);
                setDragModuleId(null);
              }}
              className={`rounded-xl border p-3 transition ${
                outline?.kind === "module" && outline.id === module.id
                  ? "border-violet-400 bg-violet-50/80 ring-2 ring-violet-200"
                  : "border-[color:var(--color-border)] bg-neutral-50/80 hover:border-[color:var(--color-border)]"
              }`}
            >
              <button
                type="button"
                onClick={() => {
                  setOutline({ kind: "module", id: module.id });
                  setSelectedBlockId(null);
                }}
                className="flex min-h-[44px] w-full cursor-grab items-start gap-2 py-1 text-left active:cursor-grabbing"
              >
                <span className="mt-0.5 text-neutral-400" aria-hidden>
                  ⋮⋮
                </span>
                <span>
                  <span className="text-xs font-bold uppercase text-violet-700">Module</span>
                  <span className="mt-0.5 block text-sm font-semibold text-neutral-900">{module.title}</span>
                </span>
              </button>

              <div className="mt-2 space-y-1 border-t border-[color:var(--color-border)]/80 pt-2">
                {(stepsByModule.get(module.id) ?? []).map((step) => (
                  <div
                    key={step.id}
                    draggable
                    onDragStart={() => setDragStep({ moduleId: module.id, stepId: step.id })}
                    onDragEnd={() => setDragStep(null)}
                    onDragOver={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      e.dataTransfer.dropEffect = "move";
                    }}
                    onDrop={async (e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      if (dragStep && dragStep.moduleId === module.id) {
                        await applyStepReorder(module.id, dragStep.stepId, step.id);
                      }
                      setDragStep(null);
                    }}
                  >
                    <button
                      type="button"
                      onClick={() => {
                        setOutline({ kind: "step", id: step.id });
                        setSelectedBlockId(null);
                      }}
                      className={`flex min-h-[44px] w-full cursor-grab items-center gap-2 rounded-lg px-2 py-2.5 text-left text-xs active:cursor-grabbing ${
                        outline?.kind === "step" && outline.id === step.id
                          ? "bg-[color:var(--color-surface)] font-semibold text-violet-900 shadow-sm"
                          : "text-[color:var(--color-muted)] hover:bg-[color:var(--color-surface-elevated)]"
                      }`}
                    >
                      <span className="text-neutral-400" aria-hidden>
                        ⋮
                      </span>
                      <span className="truncate">{step.title}</span>
                    </button>
                  </div>
                ))}
                <div className="flex gap-1 pt-1">
                  <input
                    value={newStepTitleByModule[module.id] ?? ""}
                    onChange={(e) => setNewStepTitleByModule((prev) => ({ ...prev, [module.id]: e.target.value }))}
                    className="min-h-[44px] min-w-0 flex-1 rounded-lg border border-[color:var(--color-border)] px-2 py-2 text-xs"
                    placeholder="New step"
                  />
                  <button
                    type="button"
                    className="min-h-[44px] min-w-[44px] rounded-lg bg-violet-600 px-2 py-2 text-xs font-semibold text-white hover:bg-violet-700"
                    onClick={async () => {
                      if (!token) return;
                      const title = (newStepTitleByModule[module.id] ?? "").trim();
                      if (!title) return;
                      await cmsCreateStep(token, {
                        module_id: module.id,
                        title,
                        slug: title.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
                        step_type: "custom",
                        step_order: (stepsByModule.get(module.id) ?? []).length + 1,
                        content_json: "{}",
                      });
                      setNewStepTitleByModule((prev) => ({ ...prev, [module.id]: "" }));
                      await refreshModulesSteps();
                    }}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 border-t border-neutral-100 pt-4">
          <p className="text-xs font-bold uppercase text-[color:var(--color-muted)]">Page content blocks</p>
          <p className="mt-1 text-xs text-[color:var(--color-muted)] sm:text-sm">Select a block to edit fields in the inspector below.</p>
          <div className="mt-2 grid grid-cols-2 gap-1.5">
            {blockPalette.map((item) => (
              <button
                key={item.type}
                type="button"
                onClick={() => insertBlock(item.type, blocks.length)}
                className="min-h-[44px] rounded-lg border border-[color:var(--color-border)] bg-[color:var(--color-surface)] px-2 py-2 text-left text-xs font-medium text-[color:var(--color-fg)] hover:border-neutral-400"
              >
                + {item.title}
              </button>
            ))}
          </div>
          <ol className="mt-3 max-h-40 space-y-1 overflow-y-auto text-xs">
            {blocks.map((block) => (
              <li key={block.id}>
                <button
                  type="button"
                  className={`min-h-[44px] w-full rounded-lg px-2 py-2.5 text-left text-xs ${
                    selectedBlockId === block.id ? "bg-[color:var(--color-accent-muted)] font-semibold text-[color:var(--color-fg)]" : "hover:bg-[color:var(--color-surface-subtle)]"
                  }`}
                  onClick={() => {
                    setSelectedBlockId(block.id);
                    setOutline({ kind: "block", id: block.id });
                  }}
                >
                  {block.title || "(Untitled)"} — {block.type}
                </button>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-6">
          <EditorRubricChecklist />
        </div>

        <div className="mt-6 rounded-xl border border-[color:var(--color-border)] bg-[color:var(--color-surface-elevated)] p-4">
          <h3 className="text-xs font-bold uppercase tracking-wide text-[color:var(--color-muted)]">Inspector</h3>
          <p className="mt-1 text-xs text-[color:var(--color-muted)] sm:text-sm">Module, step, or block details.</p>

          {outline?.kind === "module" && outlineModule && token ? (
            <ModuleInspectorForm module={outlineModule} token={token} onSaved={refreshModulesSteps} />
          ) : null}

          {outline?.kind === "step" && outlineStep && token ? (
            <StepInspectorForm step={outlineStep} token={token} onSaved={refreshModulesSteps} />
          ) : null}

          {(outline?.kind === "block" || outline === null) && selectedBlock ? (
            <>
              <label className="mt-4 grid gap-1 text-sm">
                Block title
                <input
                  className="rounded-xl border px-3 py-2"
                  value={selectedBlock.title}
                  onChange={(e) => updateBlock(selectedBlock.id, (prev) => ({ ...prev, title: e.target.value }))}
                />
              </label>

              {selectedBlock.type === "why_this_matters" || (selectedBlock.type === "info" && selectedBlock.title === "Lesson Opener") ? (
                <p className="mt-2 text-xs text-[color:var(--color-muted)]">Body text is edited inline in the preview (Topic Setup).</p>
              ) : null}

              {selectedBlock.type === "text" &&
              explain0 &&
              selectedBlock.id === explain0.id &&
              formal0 &&
              selectedBlock.title !== "Lesson Summary" ? (
                <p className="mt-2 text-xs text-[color:var(--color-muted)]">Guided explanation for the first concept is edited inline on the Build step.</p>
              ) : null}

              {selectedBlock.type === "info" &&
              formal0 &&
              selectedBlock.id === formal0.id &&
              selectedBlock.title.endsWith(" Formal Note") &&
              selectedBlock.title === `${explain0?.title ?? ""} Formal Note` ? (
                <p className="mt-2 text-xs text-[color:var(--color-muted)]">Formal note for the first concept is edited inline on the Build step.</p>
              ) : null}

              {selectedBlock.type === "text" &&
              !(explain0 && selectedBlock.id === explain0.id && selectedBlock.title !== "Lesson Summary") &&
              selectedBlock.title !== "Lesson Summary" ? (
                <label className="mt-3 grid gap-1 text-sm">
                  Body
                  <textarea
                    className={proseTextareaClass}
                    value={selectedBlock.text}
                    onChange={(e) => updateBlock(selectedBlock.id, (prev) => ({ ...prev, text: e.target.value }))}
                  />
                </label>
              ) : null}

              {selectedBlock.type === "text" && selectedBlock.title === "Lesson Summary" ? (
                <label className="mt-3 grid gap-1 text-sm">
                  Summary text
                  <textarea
                    className={proseTextareaClass}
                    value={selectedBlock.text}
                    onChange={(e) => updateBlock(selectedBlock.id, (prev) => ({ ...prev, text: e.target.value }))}
                  />
                </label>
              ) : null}

              {selectedBlock.type === "info" && !(selectedBlock.title === "Lesson Opener" || (formal0 && selectedBlock.id === formal0.id)) ? (
                <>
                  <label className="mt-3 grid gap-1 text-sm">
                    Body
                    <textarea
                      className={proseTextareaClass}
                      value={selectedBlock.text}
                      onChange={(e) => updateBlock(selectedBlock.id, (prev) => ({ ...prev, text: e.target.value }))}
                    />
                  </label>
                  <label className="mt-3 grid gap-1 text-sm">
                    Info tone
                    <select
                      className="rounded-xl border px-3 py-2"
                      value={selectedBlock.tone}
                      onChange={(e) =>
                        updateBlock(selectedBlock.id, (prev) => ({ ...prev, tone: e.target.value as "coach" | "formal" | "callout" }))
                      }
                    >
                      <option value="coach">Coach</option>
                      <option value="formal">Formal</option>
                      <option value="callout">Callout</option>
                    </select>
                  </label>
                </>
              ) : null}

              {selectedBlock.type === "checkpoint" ? (
                <div className="mt-3 space-y-2">
                  <input
                    className="w-full rounded-xl border px-3 py-2"
                    placeholder="Prompt"
                    value={selectedBlock.prompt}
                    onChange={(e) => updateBlock(selectedBlock.id, (prev) => ({ ...prev, prompt: e.target.value }))}
                  />
                  <input
                    className="w-full rounded-xl border px-3 py-2"
                    placeholder="Answer"
                    value={selectedBlock.answer}
                    onChange={(e) => updateBlock(selectedBlock.id, (prev) => ({ ...prev, answer: e.target.value }))}
                  />
                </div>
              ) : null}

              {selectedBlock.type === "diagram" ? (
                <div className="mt-3 space-y-2">
                  <input
                    className="w-full rounded-xl border px-3 py-2"
                    placeholder="Image path"
                    value={selectedBlock.src}
                    onChange={(e) => updateBlock(selectedBlock.id, (prev) => ({ ...prev, src: e.target.value }))}
                  />
                  <input
                    className="w-full rounded-xl border px-3 py-2"
                    placeholder="Alt text"
                    value={selectedBlock.alt}
                    onChange={(e) => updateBlock(selectedBlock.id, (prev) => ({ ...prev, alt: e.target.value }))}
                  />
                  <label className="inline-flex items-center gap-2 text-xs">
                    <input
                      type="checkbox"
                      checked={Boolean(selectedBlock.placeholder)}
                      onChange={(e) => updateBlock(selectedBlock.id, (prev) => ({ ...prev, placeholder: e.target.checked }))}
                    />
                    Placeholder (no asset yet)
                  </label>
                  {!selectedBlock.src && !selectedBlock.placeholder ? <p className="text-xs text-amber-700">Missing diagram asset.</p> : null}
                </div>
              ) : null}

              {selectedBlock.type === "latex" ? (
                <div className="mt-3 space-y-2">
                  <textarea
                    className="min-h-20 w-full rounded-xl border px-3 py-2 font-mono text-sm"
                    value={selectedBlock.equation}
                    onChange={(e) => updateBlock(selectedBlock.id, (prev) => ({ ...prev, equation: e.target.value }))}
                  />
                  {validateLatex(selectedBlock.equation) ? (
                    <p className="text-xs text-red-700">{validateLatex(selectedBlock.equation)}</p>
                  ) : (
                    <div className="rounded-xl border bg-[color:var(--color-surface)] p-3">
                      <BlockMath math={selectedBlock.equation || " "} />
                    </div>
                  )}
                </div>
              ) : null}

              {selectedBlock.type === "info" && selectedBlock.title === "Lesson Opener" ? (
                <label className="mt-3 grid gap-1 text-sm">
                  Info tone
                  <select
                    className="rounded-xl border px-3 py-2"
                    value={selectedBlock.tone}
                    onChange={(e) =>
                      updateBlock(selectedBlock.id, (prev) => ({ ...prev, tone: e.target.value as "coach" | "formal" | "callout" }))
                    }
                  >
                    <option value="coach">Coach</option>
                    <option value="formal">Formal</option>
                    <option value="callout">Callout</option>
                  </select>
                </label>
              ) : null}

              <div className="mt-4 flex flex-wrap gap-2">
                <button type="button" onClick={() => duplicateBlock(selectedBlock.id)} className="rounded-lg border px-3 py-1.5 text-xs font-semibold">
                  Duplicate
                </button>
                <button
                  type="button"
                  onClick={() => removeBlock(selectedBlock.id)}
                  className="rounded-lg border border-red-200 px-3 py-1.5 text-xs font-semibold text-red-700"
                >
                  Delete
                </button>
              </div>
            </>
          ) : null}

          {!outlineModule && !outlineStep && !selectedBlock ? (
            <p className="mt-6 text-sm text-[color:var(--color-muted)]">Nothing selected. Pick a module, step, or block.</p>
          ) : null}
        </div>
        </div>
      </dialog>
    </div>
  );
}

function ModuleInspectorForm({
  module,
  token,
  onSaved,
}: {
  module: CmsModule;
  token: string;
  onSaved: () => Promise<void>;
}) {
  const [title, setTitle] = useState(module.title);
  const [slug, setSlug] = useState(module.slug);
  const [saving, setSaving] = useState(false);
  useEffect(() => {
    setTitle(module.title);
    setSlug(module.slug);
  }, [module.id, module.title, module.slug]);

  return (
    <div className="mt-4 space-y-3">
      <p className="text-xs font-semibold text-violet-800">Module settings</p>
      <label className="grid gap-1 text-sm">
        Title
        <input className="rounded-xl border px-3 py-2" value={title} onChange={(e) => setTitle(e.target.value)} />
      </label>
      <label className="grid gap-1 text-sm">
        Slug
        <input className="rounded-xl border px-3 py-2 font-mono text-xs" value={slug} onChange={(e) => setSlug(e.target.value)} />
      </label>
      <button
        type="button"
        disabled={saving}
        className="w-full rounded-xl bg-violet-600 py-2 text-sm font-semibold text-white hover:bg-violet-700 disabled:opacity-50"
        onClick={async () => {
          setSaving(true);
          try {
            await cmsUpdateModule(token, module.id, { title, slug });
            await onSaved();
          } finally {
            setSaving(false);
          }
        }}
      >
        {saving ? "Saving…" : "Save module"}
      </button>
    </div>
  );
}

function StepInspectorForm({
  step,
  token,
  onSaved,
}: {
  step: CmsStep;
  token: string;
  onSaved: () => Promise<void>;
}) {
  const [title, setTitle] = useState(step.title);
  const [slug, setSlug] = useState(step.slug);
  const [contentJson, setContentJson] = useState(step.content_json);
  const [saving, setSaving] = useState(false);
  useEffect(() => {
    setTitle(step.title);
    setSlug(step.slug);
    setContentJson(step.content_json);
  }, [step.id, step.title, step.slug, step.content_json]);

  return (
    <div className="mt-4 space-y-3">
      <p className="text-xs font-semibold text-emerald-800">Step settings</p>
      <label className="grid gap-1 text-sm">
        Title
        <input className="rounded-xl border px-3 py-2" value={title} onChange={(e) => setTitle(e.target.value)} />
      </label>
      <label className="grid gap-1 text-sm">
        Slug
        <input className="rounded-xl border px-3 py-2 font-mono text-xs" value={slug} onChange={(e) => setSlug(e.target.value)} />
      </label>
      <label className="grid gap-1 text-sm">
        Content JSON
        <textarea className="min-h-28 w-full rounded-xl border px-3 py-2 font-mono text-xs" value={contentJson} onChange={(e) => setContentJson(e.target.value)} />
      </label>
      <button
        type="button"
        disabled={saving}
        className="w-full rounded-xl bg-emerald-600 py-2 text-sm font-semibold text-white hover:bg-emerald-700 disabled:opacity-50"
        onClick={async () => {
          setSaving(true);
          try {
            await cmsUpdateStep(token, step.id, { title, slug, content_json: contentJson });
            await onSaved();
          } finally {
            setSaving(false);
          }
        }}
      >
        {saving ? "Saving…" : "Save step"}
      </button>
    </div>
  );
}
