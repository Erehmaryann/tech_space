import axios from "axios";

export async function makeApiCall(
  url,
  method = "GET",
  data = {},
  headers = { "Content-Type": "application/json" },
  withCredentials = true,
  baseURL = `${process.env.NEXT_PUBLIC_URL}`
) {
  try {
    const options = {
      method,
      url,
      headers,
      withCredentials,
      baseURL,
      [method === "GET" ? "params" : "data"]: data,
    };
    const response = await axios(options);
    return response.data;
  } catch (error) {
    console.error(error);
    return error;
  }
}
