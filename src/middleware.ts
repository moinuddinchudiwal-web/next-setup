import { PUBLIC_ROUTES, ROLE_ROUTES, ROUTES } from "@/config/routes";
import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("USER_TOKEN")?.value;
  const role = request.cookies.get("USER_ROLE")?.value;
  const { pathname } = request.nextUrl;

  const isPublicRoute = PUBLIC_ROUTES.some((route) => pathname.startsWith(route));

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname === "/favicon.ico" ||
    pathname.match(/\.(png|jpg|jpeg|svg|gif|webp|ico|css|js)$/)
  ) {
    return NextResponse.next();
  }

  if (!token && isPublicRoute) {
    return NextResponse.next();
  }

  if (!token && !isPublicRoute) {
    return NextResponse.redirect(new URL(ROUTES.LOGIN, request.url));
  }

  if (token && isPublicRoute) {
    return NextResponse.redirect(new URL(ROUTES.DASHBOARD, request.url));
  }

  if (token && role) {
    for (const [requiredRole, routes] of Object.entries(ROLE_ROUTES)) {
      if (routes.some((route) => pathname.startsWith(route)) && role !== requiredRole) {
        if (pathname !== ROUTES.DASHBOARD) {
          return NextResponse.redirect(new URL(ROUTES.DASHBOARD, request.url));
        }
      }
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|api|favicon.ico).*)"],
};
