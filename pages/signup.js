import Head from "next/head";
import Image from "next/image";
import LoginButtons from "../components/buttons/LoginButtons";
import LoginInputs from "../components/inputs/LoginInputs";
import signup from "../public/assets/signup.png";

import {
  Container,
  Form,
  ImageDiv,
  SmallDiv,
  Main,
} from "../components/styles/AuthStyles";
import Link from "next/link";

const SignUp = () => {

  return (
    <>
      <Head>
        <title>Tech Space | Register</title>
      </Head>
      <Container>
        <Main>
          <ImageDiv>
            <Image src={signup} alt="hero Image" />
          </ImageDiv>

          <Form>
            <h4>Sign up to Tech Space</h4>
            <LoginInputs type={`text`} placeholder={`Full Name`} name={`full-name`} />
            <LoginInputs type={`text`} placeholder={`Username`} name={`username`} />
            <LoginInputs type={`email`} placeholder={`Email address`} name={`email`} />
            <LoginInputs type={`password`} placeholder={`Password`} name={`password`} />
            <LoginInputs type={`password`} placeholder={`Confirm password`} name={`confirm-password`} />
            <SmallDiv>
              <input type="checkbox" name="" id="" />
              <div>
                <div>Keep me signed in</div>
                <Link href={`/`} replace>
                  <a>Already have an account ?</a>
                </Link>
              </div>
            </SmallDiv>
            <Link href={`/`} replace>
              <a>
                <LoginButtons text={`Sign up`} />
              </a>
            </Link>
            <Link href={`/`} replace>
              <a>
                <LoginButtons isGoogleSignIn text={`Sign up with Google`} />
              </a>
            </Link>
          </Form>
        </Main>
      </Container>
    </>
  );
};

export default SignUp;
