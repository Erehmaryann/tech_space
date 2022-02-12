import PostsData from '../components/postsData/postsData';
import Head from "next/head";

const home = () => {
  <Head>
    <title>Tech Space | Home</title>
  </Head>;
  return (
    <div>
      <PostsData />
    </div>
  );
};

export default home;
