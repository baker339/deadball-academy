import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

/** `/learn` content lives on `/` (single hub). Preserve deep links with hash for scroll targets. */
export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname !== "/learn") return NextResponse.next();
  const url = request.nextUrl.clone();
  url.pathname = "/";
  url.hash = "learning-paths";
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/learn"],
};
