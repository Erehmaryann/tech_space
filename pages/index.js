import Head from "next/head";
import Image from "next/image";
import LoginButtons from "../components/buttons/LoginButtons";
import DevImage from "../public/assets/Developer.webp";
import LoginInputs from "../components/inputs/LoginInputs";
import {
  Container,
  Form,
  ImageDiv,
  SmallDiv,
  NoAcc,
  Main,
} from "../components/styles/AuthStyles";
import Link from "next/link";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const handleLogin = (e) => {
    e.preventDefault();
    Cookies.set("loggedin", "true");
    router.push("/dashboard/home");
  };

  // logout
  const handleLogout = () => {
    Cookies.remove("loggedin");
    router.push("/");
  };

  return (
    <>
      <Head>
        <title>Tech Space | Log in</title>
      </Head>
      <Container>
        <Main>
          <ImageDiv>
            <Image src={DevImage} alt="hero Image" priority />
          </ImageDiv>

          <Form onSubmit={(e) => handleLogin(e)}>
            <h4>Login to your account</h4>
            <LoginInputs
              type={`email`}
              placeholder={`Email address`}
              name={`email`}
            />
            <LoginInputs
              type={`password`}
              placeholder={`Password`}
              name={`password`}
            />
            <SmallDiv>
              <input type="checkbox" name="" id="" />
              <div>
                <div>Keep me signed in</div>
                <Link href={`/forgot-password`} replace>
                  <a>Forgot password?</a>
                </Link>
              </div>
            </SmallDiv>
            {/* <Link href={`/dashboard/home`} replace> */}
            {/* <LoginButtons text={`Log in`} onClick={handleLogin} /> */}
            <button
              // onClick={handleLogin}
              style={{ width: "100px", height: "42px", cursor: "pointer" }}
              type="submit"
            >
              Log in
            </button>
            {/* </Link> */}
            <NoAcc>
              <Link href={`/signup`} replace>
                <a>Don&apos;t have an account? </a>
              </Link>
            </NoAcc>
            <Link href={`/dashboard/home`} replace>
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
