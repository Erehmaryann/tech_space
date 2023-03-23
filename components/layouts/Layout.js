import styled from "styled-components";
import Header from "../nav-bar/Header";
import SideBar from "../side-bar/side-bar";
import SideProfile from "../sideprofile/sideProfile";
import { Container } from "./layoutStyles";
import { useRouter } from "next/router";

const Layout = ({ children }) => {
  const router = useRouter();
  const path = router.pathname;

  const sideNavDisplay =
    path === "/" ||
    path === "/login" ||
    path === "/signup" ||
    path === "/admin" ||
    path === "/404" ||
    path === "/forgot-password" ||
    path.includes("/create-new-password");
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
    <div>
      <Header />
      <Container>
        {!sideNavDisplay && <SideBar />}
        {children}
        {!sideNavDisplay && <SideProfile />}
      </Container>
    </div>
  );
};

export default Layout;
