import Head from "next/head";
import Image from "next/image";
import LoginButtons from "../components/buttons/LoginButtons";
import forgotPassword from "../public/assets/forgotpassword.png";
import LoginInputs from "../components/inputs/LoginInputs";
import {
  Container,
  Form,
  ImageDiv,
  SmallDiv,
  Main,
} from "../components/styles/AuthStyles";
import Link from "next/link";

const ForgotPassword = () => {
  return (
    <>
      <Head>
        <title>Tech Space | Forgot Password</title>
        <meta name="description" content="Tech Space Programming " />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <Main>
          <ImageDiv>
            <Image src={forgotPassword} alt="hero Image" />
          </ImageDiv>

          <Form>
            <h4>Forgot Password?</h4>
            <p>
              Enter the email address you registered with and we’ll help you
              recover it
            </p>
            <LoginInputs type={`email`} placeholder={`Email address`} />
            <Link href={`/`} replace>
              {/* <a>Already have an account ?</a> */}
              <a className="tech-space__forgot-password-small-text">
                Already have an account?
              </a>
            </Link>
            {/* <small>Already have an account?</small> */}
            <LoginButtons text={`Submit`} />
          </Form>
        </Main>
      </Container>
    </>
  );
};

export default ForgotPassword;
