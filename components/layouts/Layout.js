import styled from "styled-components";
import Header from "../nav-bar/Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Container className="tech-space__padding-top">{children}</Container>
    </>
  );
};

// const LayoutContainer = styled.main`
//   position: relative;
// `;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  // height: 100vh;
  // padding-top: 30px;
`;
export default Layout;
