#!/usr/bin/env python3
"""Rewrite SQL string literals in main.rs: ? -> $1, $2, ... for PostgreSQL."""
from __future__ import annotations

import re
import sys


def transform_sql_fragment(fragment: str) -> str:
    n = 1
    out: list[str] = []
    for ch in fragment:
        if ch == "?":
            out.append(f"${n}")
            n += 1
        else:
            out.append(ch)
    return "".join(out)


def is_sql_fragment(s: str) -> bool:
    t = s.lstrip()
    return t.startswith(
        (
            "SELECT",
            "INSERT",
            "UPDATE",
            "DELETE",
            "WITH",
        )
    ) or "\nSELECT " in s or "\nINSERT " in s or "\nUPDATE " in s or "\nDELETE " in s


def transform_rust_source(src: str) -> str:
    out: list[str] = []
    i = 0
    n = len(src)
    while i < n:
        ch = src[i]
        if ch == '"':
            start = i
            i += 1
            inner_chars: list[str] = []
            while i < n:
                if src[i] == "\\" and i + 1 < n:
                    inner_chars.append(src[i])
                    inner_chars.append(src[i + 1])
                    i += 2
                    continue
                if src[i] == '"':
                    i += 1
                    break
                inner_chars.append(src[i])
                i += 1
            else:
                raise SystemExit(f"unterminated string starting at {start}")
            inner = "".join(inner_chars)
            if is_sql_fragment(inner) and "?" in inner:
                inner = transform_sql_fragment(inner)
            out.append('"')
            out.append(inner)
            out.append('"')
            continue
        out.append(ch)
        i += 1
    return "".join(out)


def main() -> None:
    path = sys.argv[1]
    src = open(path, encoding="utf-8").read()
    new = transform_rust_source(src)
    open(path, "w", encoding="utf-8").write(new)


if __name__ == "__main__":
    main()
