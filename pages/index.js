import Head from "next/head";
import Image from "next/image";
import LoginButtons from "../components/buttons/LoginButtons";
import DevImage from "../public/assets/Developer.png";
import LoginInputs from "../components/inputs/LoginInputs";
import {
  Container,
  Form,
  ImageDiv,
  SmallDiv,
  Main,
} from "../components/styles/AuthStyles";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Tech Space | Log in</title>
      </Head>
      <Container>
        <Main>
          <ImageDiv>
            <Image src={DevImage} alt="hero Image" />
          </ImageDiv>

          <Form>
            <h4>Login to your account</h4>
            <LoginInputs type={`email`} placeholder={`Email address`} name={`email`} />
            <LoginInputs type={`password`} placeholder={`Password`} name={`password`} />
            <SmallDiv>
              <input type="checkbox" name="" id="" />

              <div>
                <div>Keep me signed in</div>
                <Link href={`/forgot-password`} replace>
                  <a>Forgot password?</a>
                </Link>
              </div>
            </SmallDiv>
            <Link href={`/home`} replace>
              <a>
                <LoginButtons text={`Log in`} />
              </a>
            </Link>
            <Link href={`/home`} replace>
              <a>
                <LoginButtons isGoogleSignIn text={`Log in with Google`} />
              </a>
            </Link>
          </Form>
        </Main>
      </Container>
    </>
  );
}
