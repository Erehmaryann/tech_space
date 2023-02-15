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
import { Button } from "../components/buttons/ButtonStyle";
import Link from "next/link";
import Spinner from "../components/common/spinner/spinner";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { makeApiCall } from "../lib/api";
import React from "react";

export default function Home() {
  const router = useRouter();
  const [loading, setLoading] = React.useState(false);
  const [loginDetails, setLoginDetails] = React.useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setLoginDetails((values) => ({
      ...values,
      [name]: value,
    }));
  };

  const handleAuth = async () => {
    setLoading(true);
    const response = (await makeApiCall)("/v1/api/login", "POST", loginDetails);
    console.log(response);
    // setLoading(false);

    // if (response) {
    //   // const signature = await signMessageAsync({ message });
    //   console.log(response);
    //   // if (verified) {
    //   //   doGetRequest();
    //   //   setAuthState("connected");
    //   //   setLoading(false);
    //   // }
    //   // console.log(verified);
    // }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Cookies.set("loggedin", "true");
    // router.push("/dashboard/home");
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
              value={loginDetails.email}
              onChange={handleChange}
            />
            <LoginInputs
              type={`password`}
              placeholder={`Password`}
              name={`password`}
              value={loginDetails.password}
              onChange={handleChange}
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
            <Button onClick={handleAuth} type="submit">
              {loading === true ? <Spinner color="#fff" /> : "Log in"}
            </Button>
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
