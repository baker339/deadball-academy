import { redirect } from "next/navigation";

/** Old URL; some browsers cached a permanent redirect here → library. Use /learn/tracks instead. */
export default function CurriculumLegacyRedirect() {
  redirect("/learn/tracks");
}
