import Head from "next/head";
import Image from "next/image";
import LoginButtons from "../components/buttons/LoginButtons";
import forgotPassword from "../public/assets/forgotpassword.png";
import LoginInputs from "../components/inputs/LoginInputs";
import {
  Container,
  Form,
  ImageDiv,
  // SmallDiv,
  Main,
} from "../components/styles/AuthStyles";
import Link from "next/link";
import Modal from "../components/modal/Modal";
import { useState } from "react";

const ForgotPassword = () => {
  const [showModal, setShowModal] = useState(false);
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

          <Form>
            <h4>Forgot Password?</h4>
            <p>
              Enter the email address you registered with and we’ll help you
              recover it
            </p>
            <LoginInputs type={`email`} placeholder={`Email address`} />
            <Link href={`/`} replace>
              <a className="tech-space__forgot-password-small-text">
                Already have an account?
              </a>
            </Link>
            <LoginButtons setShowModal={setShowModal} text={`Submit`} />
          </Form>
        </Main>
        <Modal
          onClose={() => setShowModal(false)}
          show={showModal}
          btnText={`ok`}
        >
          Check your email for password reset details
        </Modal>
      </Container>
    </>
  );
};

export default ForgotPassword;
