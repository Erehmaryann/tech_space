import Head from "next/head";
import Image from "next/image";
import LoginButtons from "../components/buttons/LoginButtons";
import createNewPassword from "../public/assets/svg/createnewpassword.svg";
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
                        <Image src={createNewPassword} alt="hero Image" />
                    </ImageDiv>

                    <Form>
                        <h4>Create a new password</h4>
                        <p>
                            Enter a strong password that you can remember
                        </p>
                        <LoginInputs type={`password`} placeholder={`New password`} />
                        <LoginInputs type={`password`} placeholder={`Confirm password`} />
                        <LoginButtons setShowModal={setShowModal} text={`Submit`} />
                    </Form>
                </Main>
                <Modal
                    onClose={() => setShowModal(false)}
                    show={showModal}
                    btnText={`ok`}
                >
                    Your password has been reset successfully!
                </Modal>
            </Container>
        </>
    );
};

export default ForgotPassword;
