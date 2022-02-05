import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import LoginButtons from "../components/buttons/LoginButtons";
import DevImage from "../public/assets/Developer.png";
import LoginInputs from "../components/inputs/LoginInputs";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Tech Space | Log in</title>
        <meta name="description" content="Tech Space Programming " />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <Main>
          <ImageDiv>
            <Image src={DevImage} alt="hero Image" />
          </ImageDiv>

          <Form>
            <h4>Login to your account</h4>
            <LoginInputs type={`email`} placeholder={`Email address`} />
            <LoginInputs type={`password`} placeholder={`Email address`} />
            <SmallDiv>
              <div>
                <input type="checkbox" name="" id="" />
                Keep me signed in
              </div>
              <div>Forgot password?</div>
            </SmallDiv>
            <LoginButtons isGoogleSignIn text={`Log in`} />
            <LoginButtons text={`Log in with Google`} />
          </Form>
        </Main>
      </Container>
    </div>
  );
}

const Container = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Main = styled.main`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
const ImageDiv = styled.div`
  width: 50%;
`;

const Form = styled.div`
  width: 35.4 %;
  display: flex;
  flex-direction: column;
  h4 {
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    line-height: 45px;
    color: #3f3d55;
    width: 100%;
  }
`;

const SmallDiv = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  div {
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 10px;
    // line-height: 15px;
    /* identical to box height */
    color: #c4c4c4;
  }
`;
