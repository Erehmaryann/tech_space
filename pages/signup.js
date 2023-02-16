import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { toast } from "react-hot-toast";

import {
  Container,
  Form,
  ImageDiv,
  SmallDiv,
  Main,
} from "../components/styles/AuthStyles";
import Spinner from "../components/common/spinner/spinner";
import { makeApiCall } from "../lib/api";
import LoginButtons from "../components/buttons/LoginButtons";
import LoginInputs from "../components/inputs/LoginInputs";
import signup from "../public/assets/signup.webp";
import { Button } from "../components/buttons/ButtonStyle";

const SignUp = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [signUpDetails, setSignUpDetails] = useState({
    fullname: "",
    email: "",
    username: "",
    password: "",
  });
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
    // console.log(signUpDetails, "signUpDetails");
    setLoading(true);
    const response = await makeApiCall("/registerUser", "POST", signUpDetails);
    if (response.message) {
      router.push("/");
      toast.success("User Created Successfully");
      // console.log(response.status);
      return;
    }

    if (response.status !== 200) {
      setLoading(false);
      // console.log(response, "error response");
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
            {/* <LoginInputs
              type={`password`}
              placeholder={`Confirm password`}
              name={`confirm-password`}
            /> */}
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
            {/* <Link href={`/`} replace>
              <a>
                <LoginButtons text={`Sign up`} />
              </a>
            </Link> */}
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
