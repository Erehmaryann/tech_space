import Head from "next/head";
import styled from "styled-components";
import Error from "../../public/assets/svg/error.svg";
import Image from "next/image";

const NotFound = () => {
  <Head>
    <title>Tech Space | Not Found</title>
  </Head>;
  return (
    <HomeItemContainer>
      <ImageDiv>
        <Image src={Error} alt="404" />
      </ImageDiv>
    </HomeItemContainer>
  );
};

export default NotFound;

const HomeItemContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  background: #e5e5e5;
`;

const ImageDiv = styled.div`
  width: 100%;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;
