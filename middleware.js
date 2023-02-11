/* eslint-disable @next/next/no-server-import-in-page */
import { NextResponse } from "next/server";

export default function middleware(req) {
  let verify = req.cookies.get("loggedin");
  let url = req.url;
  const { origin } = req.nextUrl;
  console.log(url);
  if (!verify && url.includes("/dashboard")) {
    return NextResponse.redirect(`${origin}/`);
  }

  if (verify && url === `${origin}/`) {
    return NextResponse.redirect("/dashboard/home");
  }
}

// https://tech-space.onrender.com
