import styled from "styled-components";
import Header from "../nav-bar/Header";
import SideBar from "../side-bar/side-bar";
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
    path === "/create-new-password";
  return (
    <div>
      <Header />
      <Container>
        {!sideNavDisplay && <SideBar />}
        {children}
        {!sideNavDisplay && <SideBar />}
        {/* <SideBar /> */}
      </Container>
    </div>
  );
};

const Container = styled.div`
  /* display: grid; */
  /* grid-template-columns: 300px auto 300px; */
  display: flex;
  width: 100%;
  /* min-height: 100vh; */
  padding-top: 10px;
  background: #e5e5e5;
  padding-top: 80px;
`;
export default Layout;
