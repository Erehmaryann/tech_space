/* eslint-disable @next/next/no-server-import-in-page */
import { NextResponse } from "next/server";

export default function middleware(req) {
  let verify = req.cookies.get("loggedin");
  let url = req.url;
  console.log(url);
  if ((!verify && url.includes("/home")) || url.includes("/requests")) {
    return (
      NextResponse.redirect("http://localhost:3000/") ||
      NextResponse.redirect("tech-space-eight.vercel.app")
    );
  }
}
