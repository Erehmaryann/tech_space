import PostsData from "../components/homepage/posts-data";
import Head from "next/head";
import Comments from '../components/common/comment/comments';
import styled from "styled-components";
//  since you want the login to be the home page.\, we would conditionally render either log in or home page here and then pass it to the index page
const home = () => {
  return (
    <>
      <Head>
        <title>Tech Space | Home</title>
      </Head>
      <HomeItemContainer>
        {/* <PostsData /> */}
        <Comments currentUserId="1" />
      </HomeItemContainer>
    </>

  );
};

const HomeItemContainer = styled.div`
  background: #e5e5e5;
`;

export default home;
