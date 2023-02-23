import axios from "axios";
import Cookies from "js-cookie";
import { useState } from "react";

const token = Cookies.get("user_token") || "";
export async function makeApiCall(
  url,
  method = "GET",
  data = {},
  headers = {
    "Content-Type": "application/json",
    AccessToken: token,
  },
  baseURL = `${process.env.NEXT_PUBLIC_URL}`
) {
  try {
    const options = {
      method,
      url,
      headers,
      baseURL,
      [method === "GET" ? "params" : "data"]: data,
    };
    const response = await axios(options);
    return response.data;
  } catch (error) {
    return error;
  }
}
// In the headers object, I've added an Authorization header with the value "Bearer ${YOUR_TOKEN_HERE}". Replace YOUR_TOKEN_HERE with your actual token value.

// With this modification, all API requests made with makeApiCall will include the Authorization header with the token value.
