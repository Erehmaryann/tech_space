import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import Cookies from "js-cookie";
import { toast } from "react-hot-toast";
import { GoogleIcon } from "../components/Icons/Icon";
import {
  Container,
  Form,
  ImageDiv,
  SmallDiv,
  Main,
} from "../components/styles/AuthStyles";
import Spinner from "../components/common/spinner/spinner";
import { makeApiCall } from "../lib/api";
import LoginInputs from "../components/inputs/LoginInputs";
import signup from "../public/assets/signup.webp";
import { Button } from "../components/buttons/ButtonStyle";

const SignUp = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [signUpDetails, setSignUpDetails] = useState({
    fullname: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
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
      toast.error(response?.message);
      return;
    }
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setSignUpDetails((values) => ({
      ...values,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (signUpDetails.password !== signUpDetails.confirmPassword) {
      setLoading(false);
      toast.error("Password and confirm password does not match");
      return;
    }
    const response = await makeApiCall("/registerUser", "POST", signUpDetails);
    if (response.message) {
      router.push("/");
      toast.success("User Created Successfully");
      return;
    }

    if (response.status !== 200) {
      setLoading(false);
      toast.error("User Creation Failed");
      return;
    }
  };

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
          <div style={{ width: "35.4%" }}>
            <Form onSubmit={(e) => handleSubmit(e)}>
              <h4>Sign up to Tech Space</h4>
              <LoginInputs
                type={`text`}
                placeholder={`Full Name`}
                name={`fullname`}
                value={signUpDetails.fullname}
                onChange={handleChange}
                required
              />
              <LoginInputs
                type={`text`}
                placeholder={`Username`}
                name={`username`}
                value={signUpDetails.username}
                onChange={handleChange}
                required
              />
              <LoginInputs
                type={`email`}
                placeholder={`Email address`}
                name={`email`}
                value={signUpDetails.email}
                onChange={handleChange}
                required
              />
              <LoginInputs
                type={`password`}
                placeholder={`Password`}
                name={`password`}
                value={signUpDetails.password}
                onChange={handleChange}
                required
              />
              <LoginInputs
                type={`password`}
                placeholder={`Confirm password`}
                name={`confirmPassword`}
                value={signUpDetails.confirmPassword}
                onChange={handleChange}
                required
              />
              <SmallDiv>
                <input type="checkbox" name="" id="" />
                <div>
                  <div>Keep me signed in</div>
                  <Link href={`/`} replace>
                    <a>Already have an account ?</a>
                  </Link>
                </div>
              </SmallDiv>
              <Button type="submit" disabled={loading}>
                {loading === true ? <Spinner color="#fff" /> : "Sign up"}
              </Button>
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
                  Sign Up with Google
                </>
              )}
            </button>
          </div>
        </Main>
      </Container>
    </>
  );
};

export default SignUp;
