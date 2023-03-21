import { useRouter } from "next/router";
import LoginNav from "./LoginNav";
import MainNav from "./MainNav";

const Header = () => {
  const router = useRouter();
  const path = router.asPath;

  const pathsWithoutLayout = [
    "/create-new-password",
    "/",
    "/login",
    "/signup",
    "/admin",
    "/404",
    "/forgot-password",
  ];

  const hasNoLayout = pathsWithoutLayout.some((route) => path.includes(route));

  return <>{hasNoLayout ? <LoginNav /> : <MainNav />}</>;
};

export default Header;
