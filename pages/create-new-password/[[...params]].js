// export default function CreateNewPassword() {

//   const handlePasswordChange = async () => {
//     const v = await fetch('', {
//       method: 'POST',
//       headers: {

//       }

//   })
// }

//   return <div>{JSON.stringify({ token, email })}</div>;
// }

import Head from "next/head";
import Image from "next/image";
import LoginButtons from "../../components/buttons/LoginButtons";
import createNewPassword from "../../public/assets/svg/createnewpassword.svg";
import LoginInputs from "../../components/inputs/LoginInputs";
import { useRouter } from "next/router";
import {
  Container,
  Form,
  ImageDiv,
  Main,
} from "../../components/styles/AuthStyles";
import { toast } from "react-hot-toast";
import Spinner from "../../components/common/spinner/spinner";
import { makeApiCall } from "../../lib/api";
import Modal from "../../components/modal/Modal";
import { useState } from "react";

const CreateNewPassword = () => {
  const router = useRouter();
  const { params } = router.query;
  if (!params || !Array.isArray(params)) throw Error;
  const [key, email] = params;

  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [changePassDetails, setChangePassDetails] = useState({
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setChangePassDetails((values) => ({
      ...values,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (changePassDetails.password !== changePassDetails.confirmPassword) {
      setLoading(false);
      toast.error("Password and confirm password does not match");
      return;
    }
    const response = await makeApiCall(
      `/resetpassword/${key}/${email}`,
      "PATCH",
      changePassDetails
    );
    console.log(response, "nawa o");
    // if (response?.message === "password updated successfully") {
    //   toast.success(response?.message);
    //   setChangePassDetails({
    //     password: "",
    //     confirmPassword: "",
    //   });
    //   setLoading(false);
    //   setShowModal(true);
    //   return;
    // }
    // setLoading(false);
    // if (response?.message !== "password updated successfully") {
    //   toast.error(response?.response?.data?.message);
    //   setChangePassDetails({
    //     password: "",
    //     confirmPassword: "",
    //   });
    //   return;
    // }
  };

  return (
    <>
      <Head>
        <title>Tech Space | Create New Password</title>
      </Head>
      <Container>
        <Main>
          <ImageDiv>
            <Image src={createNewPassword} alt="hero Image" />
          </ImageDiv>

          <Form onSubmit={(e) => handleSubmit(e)} autoComplete="off">
            <h4>Create a new password</h4>
            <p>Enter a strong password that you can remember</p>
            <LoginInputs
              type={`password`}
              placeholder={`New password`}
              name={`password`}
              value={changePassDetails.password}
              onChange={handleChange}
            />
            <LoginInputs
              type={`password`}
              placeholder={`Confirm password`}
              name={`confirmPassword`}
              value={changePassDetails.confirmPassword}
              onChange={handleChange}
            />
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
              <LoginButtons type={"submit"} text={`Submit`} />
            )}
          </Form>
        </Main>
        <Modal
          onClose={() => setShowModal(false)}
          show={showModal}
          btn
          btnText={`ok`}
        >
          Your password has been reset successfully!
        </Modal>
      </Container>
    </>
  );
};

export default CreateNewPassword;
