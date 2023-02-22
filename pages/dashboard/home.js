import PostsData from "../../components/homepage/posts-data";
import Head from "next/head";
import styled from "styled-components";
import Cookies from "js-cookie";
import { useUser } from "../../helper/get-user";
//  since you want the login to be the home page.\, we would conditionally render either log in or home page here and then pass it to the index page

const Home = () => {
  // const userDetails = JSON.parse(Cookies.get("user_details"));
  // console.log(userDetails);

  const user = useUser();

  console.log(user, "user");

  return (
    <>
      <Head>
        <title>Tech Space | Home</title>
      </Head>
      <HomeItemContainer>
        <PostsData />
      </HomeItemContainer>
    </>
  );
};

const HomeItemContainer = styled.div`
  background: #e5e5e5;
  width: 50%;
`;

export default Home;
