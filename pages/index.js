import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import toast from "react-hot-toast";

import {
  Container,
  Form,
  ImageDiv,
  SmallDiv,
  NoAcc,
  Main,
} from "../components/styles/AuthStyles";
import { Button } from "../components/buttons/ButtonStyle";
import Spinner from "../components/common/spinner/spinner";
import { makeApiCall } from "../lib/api";
import LoginButtons from "../components/buttons/LoginButtons";
import DevImage from "../public/assets/Developer.webp";
import LoginInputs from "../components/inputs/LoginInputs";

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const response = await makeApiCall("/login", "POST", loginDetails);
    if (response.user) {
      Cookies.set("user_token", response.message);
      router.push("/dashboard/home");
      response.user.role === "admin"
        ? router.push("/dashboard/requests")
        : router.push("/dashboard/home");

      toast.success("login attempt successful");
      return;
    }

    setLoading(false);
    if (response.status !== 200) {
      toast.error("login attempt failed");
    }
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

          <Form onSubmit={(e) => handleSubmit(e)}>
            <h4>Login to your account</h4>
            <LoginInputs
              type={`email`}
              placeholder={`Email address`}
              name={`email`}
              value={loginDetails.email}
              onChange={handleChange}
              required
            />
            <LoginInputs
              type={`password`}
              placeholder={`Password`}
              name={`password`}
              value={loginDetails.password}
              onChange={handleChange}
              required
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
            <Button type="submit">
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
