FROM rust:1.88-slim-bookworm AS builder

WORKDIR /app

COPY Cargo.toml Cargo.lock ./
COPY src ./src
COPY migrations ./migrations

RUN cargo build --release


FROM debian:bookworm-slim

RUN apt-get update \
  && apt-get install -y --no-install-recommends ca-certificates \
  && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY --from=builder /app/target/release/academy-backend-rust /app/academy-backend-rust
COPY --from=builder /app/migrations /app/migrations
COPY app/data/curriculum_catalog.json /app/app/data/curriculum_catalog.json

# Do not set ACADEMY_RUST_ADDR here: Render/Fly inject PORT; a fixed :8000 prevents the
# process from listening on $PORT and triggers "No open ports detected".
# docker-compose sets ACADEMY_RUST_ADDR (or pass -e PORT / -e ACADEMY_RUST_ADDR).

EXPOSE 8000

CMD ["/app/academy-backend-rust"]
