import Head from "next/head";
import Image from "next/image";
import LoginButtons from "../components/buttons/LoginButtons";
import forgotPassword from "../public/assets/forgotpassword.webp";
import LoginInputs from "../components/inputs/LoginInputs";
import {
  Container,
  Form,
  ImageDiv,
  Main,
} from "../components/styles/AuthStyles";
import Link from "next/link";
import Modal from "../components/modal/Modal";
import { useState } from "react";
import { toast } from "react-hot-toast";
import Spinner from "../components/common/spinner/spinner";
import { makeApiCall } from "../lib/api";

const ForgotPassword = () => {
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [forgotPassDetails, setForgotPassDetails] = useState({
    email: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setForgotPassDetails((values) => ({
      ...values,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const response = await makeApiCall(
      "/forgotpassword",
      "POST",
      forgotPassDetails
    );
    if (response?.message === "mail sent") {
      toast.success(response?.message);
      setForgotPassDetails({
        email: "",
      });
      setLoading(false);
      setShowModal(true);
      return;
    }
    setLoading(false);
    if (response?.message !== "mail sent") {
      toast.error(response?.response?.data?.message);
      setForgotPassDetails({
        email: "",
      });
      return;
    }
  };

  return (
    <>
      <Head>
        <title>Tech Space | Forgot Password</title>
      </Head>
      <Container>
        <Main>
          <ImageDiv>
            <Image src={forgotPassword} alt="hero Image" />
          </ImageDiv>

          <Form onSubmit={(e) => handleSubmit(e)} autoComplete="off">
            <h4>Forgot Password?</h4>
            <p>
              Enter the email address you registered with and we’ll help you
              recover it
            </p>
            <LoginInputs
              type={`email`}
              placeholder={`Email address`}
              name={`email`}
              value={forgotPassDetails.email}
              onChange={handleChange}
            />
            <Link href={`/`} replace>
              <a className="tech-space__forgot-password-small-text">
                Already have an account?
              </a>
            </Link>
            {loading ? (
              <div
                style={{
                  background: "#409de0",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                  borderRadius: "5px",
                  height: "41px",
                  margin: "10px 0",
                  cursor: "pointer",
                  boxShadow: "0px 5px 8px rgba(64, 157, 224, 0.15)",
                  border: "none",
                }}
              >
                <Spinner color="#fff" />
              </div>
            ) : (
              <LoginButtons
                // setShowModal={setShowModal}
                type={"submit"}
                text={`Submit`}
              />
            )}
          </Form>
        </Main>
        <Modal
          onClose={() => setShowModal(false)}
          show={showModal}
          btn
          btnText={`ok`}
        >
          Check your email for password reset details
        </Modal>
      </Container>
    </>
  );
};

export default ForgotPassword;
