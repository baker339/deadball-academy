#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
FRONTEND_DIR="$(cd "$ROOT_DIR/../frontend" && pwd)"

echo "Stopping existing backends on :8000"
lsof -ti tcp:8000 | xargs -r kill -9 || true

echo "Starting Rust Academy backend on :8000"
cd "$ROOT_DIR"
if [[ -f ".env" ]]; then
  export $(grep -v '^#' .env | xargs) || true
fi
cargo run &
RUST_PID=$!

echo "Rust backend PID: $RUST_PID"
echo "Frontend should target http://localhost:8000 (default NEXT_PUBLIC_API_BASE_URL behavior)."
echo "If frontend is not running, start it with:"
echo "  cd \"$FRONTEND_DIR\" && npm run dev"

wait $RUST_PID
