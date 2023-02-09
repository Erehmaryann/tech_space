/* eslint-disable @next/next/no-server-import-in-page */
import { NextResponse } from "next/server";

export default function middleware(req) {
  let verify = req.cookies.get("loggedin");
  let url = req.url;
  console.log(url);
  if (
    (!verify && url.includes("/home")) ||
    url.includes("/requests") ||
    url.includes("/android-ios") ||
    url.includes("/computer-repair") ||
    url.includes("/create-new-password") ||
    url.includes("/forgot-password") ||
    url.includes("/members") ||
    url.includes("/networking") ||
    url.includes("/phone-technology") ||
    url.includes("/profile") ||
    url.includes("/programming") ||
    url.includes("/reports") ||
    url.includes("/saved-topics") ||
    url.includes("/settings") ||
    url.includes("/topics") ||
    url.includes("/trending") ||
    url.includes("/web-development") ||
    url.includes("/404")
  ) {
    return NextResponse.redirect("http://localhost:3000/");
  }
}
