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
  background: red;
  border: 1px solid blue;
  width: 100%;
  height: 90vh;
  //   height: 100vh;
`;
export default Layout;
