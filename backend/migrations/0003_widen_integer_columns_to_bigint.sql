-- Align INTEGER columns with Rust/sqlx decoding as i64 (INT8). PostgreSQL INTEGER (INT4)
-- is not accepted where the app expects BIGINT (e.g. repair_seeded_lesson_revisions reads
-- revision_number as the second column into (i64, i64, String)).

ALTER TABLE users ALTER COLUMN is_active TYPE BIGINT USING is_active::bigint;

ALTER TABLE courses ALTER COLUMN is_premium TYPE BIGINT USING is_premium::bigint;

ALTER TABLE modules ALTER COLUMN module_order TYPE BIGINT USING module_order::bigint;
ALTER TABLE modules ALTER COLUMN estimated_minutes TYPE BIGINT USING estimated_minutes::bigint;

ALTER TABLE lessons ALTER COLUMN lesson_order TYPE BIGINT USING lesson_order::bigint;
ALTER TABLE lessons ALTER COLUMN estimated_minutes TYPE BIGINT USING estimated_minutes::bigint;

ALTER TABLE progress_events ALTER COLUMN time_spent_seconds TYPE BIGINT USING time_spent_seconds::bigint;

ALTER TABLE curriculum_tracks ALTER COLUMN track_order TYPE BIGINT USING track_order::bigint;
ALTER TABLE curriculum_tracks ALTER COLUMN is_published TYPE BIGINT USING is_published::bigint;

ALTER TABLE curriculum_units ALTER COLUMN unit_order TYPE BIGINT USING unit_order::bigint;
ALTER TABLE curriculum_units ALTER COLUMN is_published TYPE BIGINT USING is_published::bigint;

ALTER TABLE curriculum_lessons ALTER COLUMN lesson_order TYPE BIGINT USING lesson_order::bigint;

ALTER TABLE lesson_revisions ALTER COLUMN revision_number TYPE BIGINT USING revision_number::bigint;

ALTER TABLE curriculum_modules ALTER COLUMN module_order TYPE BIGINT USING module_order::bigint;
ALTER TABLE curriculum_modules ALTER COLUMN archived TYPE BIGINT USING archived::bigint;

ALTER TABLE curriculum_steps ALTER COLUMN step_order TYPE BIGINT USING step_order::bigint;
ALTER TABLE curriculum_steps ALTER COLUMN archived TYPE BIGINT USING archived::bigint;
