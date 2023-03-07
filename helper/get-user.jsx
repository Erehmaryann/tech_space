import Cookies from "js-cookie";

export const useUser = () => {
  const user = JSON.parse(Cookies.get("user_details")) || null;
  return user;
};
