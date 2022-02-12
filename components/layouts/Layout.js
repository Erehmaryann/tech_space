import styled from "styled-components";
import Header from "../nav-bar/Header";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <Container>{children}</Container>
    </div>
  );
};

// const LayoutContainer = styled.main`
//   position: relative;
// `;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  padding-top: 10px;
  background: white;
  // background: #e5e5e5;
  padding-top: 80px;
`;
export default Layout;
