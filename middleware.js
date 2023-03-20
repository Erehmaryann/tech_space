/* eslint-disable @next/next/no-server-import-in-page */
import { NextResponse } from "next/server";

export default function middleware(req) {
  let verify = req.cookies.get("user_token");
  // const userDetails = JSON.parse(req.cookies.get("user_details"));
  const userDetailsCookie = req.cookies.get("user_details");
  let userDetails = null;

  if (userDetailsCookie && typeof userDetailsCookie === "string") {
    try {
      userDetails = JSON.parse(userDetailsCookie);
    } catch (e) {
      console.error(`Error parsing user_details cookie: ${e}`);
    }
  }
  let url = req.url;
  let role = userDetails?.role;
  const { origin } = req.nextUrl;
  if (!verify && url.includes("/dashboard")) {
    return NextResponse.redirect(`${origin}/`);
  }

  if (
    (verify && url === `${origin}/`) ||
    (verify && url === `${origin}/signup`)
  ) {
    return NextResponse.redirect(
      role === "admin"
        ? `${origin}/dashboard/requests`
        : `${origin}/dashboard/home`
    );
  }
}
