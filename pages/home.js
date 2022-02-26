import PostsData from "../components/home-page-components/posts-data";
// import SideBar from '../components/side-bar/side-bar';
import Head from "next/head";
import styled from "styled-components";
//  since you want the login to be the home page.\, we would conditionally render either log in or home page here and then pass it to the index page
const home = () => {
  <Head>
    <title>Tech Space | User Console</title>
  </Head>;
  return (
    <HomeItemContainer>
      {/* <SideBar /> */}
      <PostsData />
      {/* <div>side bar</div> */}
    </HomeItemContainer>
  );
};

const HomeItemContainer = styled.div`
  /* display: flex; */
  /* width: 100%; */
  /* justify-content: space-between; */
  background: #e5e5e5;
`;

export default home;
