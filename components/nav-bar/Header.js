import { useRouter } from "next/router";
import LoginNav from "./LoginNav";
import MainNav from "./MainNav";

const Header = () => {
  const router = useRouter();
  const path = router.pathname;

  // const pathsWithoutLayout = [
  //   "/create-new-password",
  //   "/",
  //   "/login",
  //   "/signup",
  //   "/admin",
  //   "/404",
  //   "/forgot-password",
  // ];

  // const hasNoLayout = pathsWithoutLayout.some((route) => path.includes(route));

  return (
    <>
      {path === "/" ||
      path === "/login" ||
      path === "/signup" ||
      path === "/admin" ||
      path === "/404" ||
      path === "/forgot-password" ||
      path.includes("/create-new-password") ? (
        <LoginNav />
      ) : (
        <MainNav />
      )}
    </>
  );
};

export default Header;
