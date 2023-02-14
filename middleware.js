/* eslint-disable @next/next/no-server-import-in-page */
import { NextResponse } from "next/server";
import Cookies from "js-cookie";

export default function middleware(req) {
  let verify = Cookies.get("loggedin");
  // let verify = req.cookies.get("loggedin");
  let url = req.url;
  const { origin } = req.nextUrl;

  if (!verify && url.includes("/dashboard")) {
    return NextResponse.redirect(`${origin}/`);
  }

  if (verify && url.includes(`${origin}/dashboard`)) {
    return NextResponse.redirect("/dashboard/home");
  }
}

// https://tech-space.onrender.com
