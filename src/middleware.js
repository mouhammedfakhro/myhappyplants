import { NextResponse } from "next/server";
import { jwtVerify } from "jose";
import { getCookie, setCookie } from "cookies-next/server";

const SECRET_KEY = process.env.JWT_SECRET;

export async function middleware(req) {
  const res = NextResponse.next();
  let token = await getCookie("token", { req, res });

  if (token && typeof token === "string" && token.startsWith("{")) {
    try {
      const parsed = JSON.parse(token);
      token = parsed.token;
    } catch (e) {
      console.error("Middleware: Failed to parse token JSON", e);
    }
  }

  if (req.nextUrl.pathname === "/") {
    if (token) {
      return NextResponse.redirect(new URL("/home", req.url));
    }
    return NextResponse.next();
  }

  if (!token) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  try {
    const { payload: user } = await jwtVerify(
      token,
      new TextEncoder().encode(SECRET_KEY)
    );
    setCookie("user", JSON.stringify(user), { req, res });
  } catch (error) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return res;
}

export const config = {
  matcher: "/((?!^/$|api/.*|_next/.*|favicon.ico|assets|signup|verifyEmail|passWordResetRequest|passwordReset).*)",
};
