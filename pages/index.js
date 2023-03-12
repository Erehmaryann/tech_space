/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { GoogleIcon } from "../components/Icons/Icon";
import { useGoogleLogin } from "@react-oauth/google";
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
import DevImage from "../public/assets/Developer.webp";
import LoginInputs from "../components/inputs/LoginInputs";

export default function Login() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  });

  const googleLogin = useGoogleLogin({
    onSuccess: (codeResponse) => {
      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${codeResponse?.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${codeResponse?.access_token}`,
              Accept: "application/json",
            },
          }
        )
        .then((res) => {
          setGoogleLoading(true);
          handleGoogleLogin(res);
        })
        .catch((err) => toast.error(err.message));
    },
    onError: (error) => toast.error("Login Failed:", error.message),
  });

  const handleGoogleLogin = async (res) => {
    const response = await makeApiCall("/loginwithgoogle", "POST", {
      email: res.data.email,
      fullname: res.data.name,
      profileimg: res.data.picture,
      username: res.data.given_name,
    });
    setGoogleLoading(true);
    if (response?.user) {
      Cookies.set("user_token", response?.message);
      Cookies.set("user_details", JSON.stringify(response?.user));
      response.user.role === "admin"
        ? router.push("/dashboard/requests")
        : router.push("/dashboard/home");

      toast.success("login attempt successful");
      return;
    }

    if (response.status !== 200) {
      setGoogleLoading(false);
      toast.error(response?.response?.data?.message);
      return;
    }
  };

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
    // Save token and user details in cookies
    if (response.user) {
      Cookies.set("user_token", response.message);
      Cookies.set("user_details", JSON.stringify(response.user));
      // Redirect to appropriate page
      response.user.role === "admin"
        ? router.push("/dashboard/requests")
        : router.push("/dashboard/home");

      toast.success("login attempt successful");
      return;
    }

    setLoading(false);
    if (response.status !== 200) {
      toast.error(response?.response?.data?.message);
    }
  };

  // const checkTokenExpiration = () => {
  //   const token = Cookies.get("user_token");
  //   const userDetails = Cookies.get("user_details");

  //   if (token && userDetails) {
  //     const { exp } = JSON.parse(atob(token.split(".")[1]));

  //     if (Date.now() >= exp * 1000) {
  //       Cookies.remove("user_token");
  //       Cookies.remove("user_details");
  //       router.push("/");
  //     }
  //   } else {
  //     router.push("/");
  //   }
  // };

  // useEffect(() => {
  //   checkTokenExpiration();
  // }, []);

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
            <Form onSubmit={(e) => handleSubmit(e)} autoComplete="off">
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

            <button
              type="submit"
              onClick={googleLogin}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                borderRadius: "5px",
                height: "41px",
                margin: "10px 0",
                cursor: "pointer",
                boxShadow: "0px 5px 8px rgba(64, 157, 224, 0.15)",
                background: "#fff",
                color: "#109FEF",
                border: "none",
              }}
            >
              {googleLoading ? (
                <Spinner color="#409DE0" />
              ) : (
                <>
                  <span
                    style={{
                      marginRight: "10px",
                    }}
                  >
                    <GoogleIcon />
                  </span>
                  Log in with Google
                </>
              )}
            </button>
          </div>
        </Main>
      </Container>
    </>
  );
}
