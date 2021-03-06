import PostsData from "../components/homepage/posts-data";
import Head from "next/head";
import styled from "styled-components";
// import Emoji from '../components/emoji/emoji';
//  since you want the login to be the home page.\, we would conditionally render either log in or home page here and then pass it to the index page
const home = () => {
  return (
    <>
      <Head>
        <title>Tech Space | Home</title>
      </Head>
      <HomeItemContainer>
        <PostsData />
        {/* <Picker /> */}
      </HomeItemContainer>
    </>

  );
};

const HomeItemContainer = styled.div`
  background: #e5e5e5;
  width: 50%;
`;

export default home;
