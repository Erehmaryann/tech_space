/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { GoogleIcon } from "../components/Icons/Icon";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
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

export default function Login() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  });

  const [user, setUser] = useState([]);
  const [profile, setProfile] = useState([]);

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => {
      setUser(codeResponse);
      router.push("/dashboard/home");
      toast.success("login attempt successful");
      console.log(codeResponse, "hmmmmmmm");
    },
    onError: (error) => console.log("Login Failed:", error),
  });

  useEffect(() => {
    if (user) {
      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${user.access_token}`,
              Accept: "application/json",
            },
          }
        )
        .then((res) => {
          // console.log(res, "nawa for you");
          setProfile(res.data);
          if (res.status === 200) {
            router.push("/dashboard/home");
            toast.success("login attempt successful");
          }
        })
        .catch((err) => console.log(err));
    }
  }, [user]);

  // log out function to log the user out of google and set the profile array to null
  // const logOut = () => {
  //   googleLogout();
  //   setProfile(null);
  // };

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
      Cookies.set("user_details", JSON.stringify(response.user));
      // Cookies.set("user_details", response.user);
      // router.push("/dashboard/home");
      response.user.role === "admin"
        ? router.push("/dashboard/requests")
        : router.push("/dashboard/home");

      toast.success("login attempt successful");
      return;
    }

    setLoading(false);
    if (response.status !== 200) {
      // console.log(response, "god abeg");
      toast.error(response?.response?.data?.message);
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
          <div style={{ width: "35.4%" }}>
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
            </Form>
            {/* {profile ? (
              <div>
                <img src={profile.picture} alt="user image" />
                <h3>User Logged in</h3>
                <p>Name: {profile.name}</p>
                <p>Email Address: {profile.email}</p>
                <br />
                <br />
                <button onClick={logOut}>Log out</button>
              </div>
            ) : ( */}
            <button type="submit" onClick={() => login()}>
              {/* <LoginButtons isGoogleSignIn text={`Log in with Google`} /> */}
              <span>
                <GoogleIcon />
              </span>
              Log in with Google
            </button>
            {/* )} */}
          </div>
        </Main>
      </Container>
    </>
  );
}
