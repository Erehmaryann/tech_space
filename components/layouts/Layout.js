import Nav from "../nav-bar/LoginNav";
import styled from "styled-components";

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <Container>{children}</Container>
    </>
  );
};

const Container = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 91vh;
`;
export default Layout;
