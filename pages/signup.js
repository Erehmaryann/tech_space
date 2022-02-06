import Head from "next/head";
import Image from "next/image";
import LoginButtons from "../components/buttons/LoginButtons";
import LoginInputs from "../components/inputs/LoginInputs";
import DevImage from "../public/assets/Developer.png";
import {
  Container,
  Form,
  ImageDiv,
  SmallDiv,
  Main,
} from "../components/styles/AuthStyles";

const SignUp = () => {
  return (
    <>
      <Head>
        <title>Tech Space | Register</title>
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
              <input type="checkbox" name="" id="" />

              <div>
                <div>Keep me signed in</div>
                <div>Forgot password?</div>
              </div>
            </SmallDiv>
            <LoginButtons text={`Log in`} />
            <LoginButtons isGoogleSignIn text={`Log in with Google`} />
          </Form>
        </Main>
      </Container>
    </>
  );
};

export default SignUp;
