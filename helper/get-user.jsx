import Cookies from "js-cookie";

export const useUser = () => {
  const user = JSON.parse(Cookies.get("user_details"));
  return user;
};
