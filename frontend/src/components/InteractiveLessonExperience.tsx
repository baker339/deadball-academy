"use client";

import LessonExperienceView, { type LessonExperienceViewProps } from "./LessonExperienceView";

type Props = Omit<LessonExperienceViewProps, "context">;

export default function InteractiveLessonExperience(props: Props) {
  return <LessonExperienceView {...props} context="learn" />;
}
