import styled from "styled-components";
import Header from "../nav-bar/Header";
import SideBar from '../side-bar/side-bar';

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <Container>
        <SideBar />
        {children}
        <SideBar />
      </Container>
    </div >
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: 300px auto 300px;
  width: 100%;
  min-height: 100vh;
  padding-top: 10px;
  background: #e5e5e5;
  padding-top: 80px;
`;
export default Layout;
