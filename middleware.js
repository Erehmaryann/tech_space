/* eslint-disable @next/next/no-server-import-in-page */
import { NextResponse } from "next/server";

export default function middleware(req) {
  let verify = req.cookies.get("user_token");
  // let verify = req.cookies.get("loggedin");
  let url = req.url;
  const { origin } = req.nextUrl;

  if (!verify && url.includes("/dashboard")) {
    return NextResponse.redirect(`${origin}/`);
  }

  if (
    (verify && url === `${origin}/`) ||
    (verify && url === `${origin}/signup`)
  ) {
    return NextResponse.redirect(`${origin}/dashboard/home`);
  }
}

// https://tech-space.onrender.com
