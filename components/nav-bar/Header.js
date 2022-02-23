import { useRouter } from "next/router";
import LoginNav from "./LoginNav";
import MainNav from "./MainNav";

const Header = () => {
  const router = useRouter();
  const path = router.pathname;

  return (
    <>
      {path === "/" ||
        path === "/login" ||
        path === "/signup" ||
        path === "/admin" ||
        // path === "/404" || 
        path === "/forgot-password" || path === "/create-new-password" ? (
        <LoginNav />
      ) : (
        <MainNav />
      )}
    </>
  );
};

export default Header;
