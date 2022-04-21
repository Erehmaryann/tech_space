import Head from "next/head";
import { HomeItemContainer, ImageDiv } from "./404Styles";
import Error from "../../public/assets/svg/error.svg";
import Image from "next/image";

const NotFound = () => {
  return (
    <>
      <Head>
        <title>Tech Space | Not Found</title>
      </Head>
      <HomeItemContainer>
        <ImageDiv>
          <Image src={Error} alt="404" />
        </ImageDiv>
      </HomeItemContainer>
    </>
  );
};

export default NotFound;