import type { NextRequest } from "next/server";
import { updateSession } from "@/utils/supabase/proxy";

// Boilerplate file required for Next.js.

// Next.js entry point
export function proxy(request: NextRequest) {
  return updateSession(request); // Forward to our own implementation.
}

// Used by Next.js to determine which routes to run the proxy function on.
export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
