import { NextRequest, NextResponse } from "next/server";

export const config = {
  matcher: ["/admin"],
};

export function middleware(req: NextRequest) {
  const basicAuth = req.headers.get("authorization");
  const url = req.nextUrl;

  if (basicAuth) {
    const authValue = basicAuth.split(" ")[1];
    if (!authValue) return console.log("error");
    const [user, pwd] = atob(authValue).split(":");

    if (user === process.env.ADMIN_NAME && pwd === process.env.ADMIN_PASSWORD) {
      return NextResponse.next();
    }
  }
  url.pathname = "/api/auth";

  return NextResponse.rewrite(url);
}
