<<<<<<< HEAD
import React from "react";
=======
import styled from "styled-components";
>>>>>>> 725194780453bfb94cf3a04163eb10feb010a5c7
import { GoogleIcon } from "../Icons/Icon";
import { Button } from "./ButtonStyle";

const LoginButtons = ({ isGoogleSignIn, text, setShowModal }) => {
  return (
    <Button
      onClick={() => {
        setShowModal && setShowModal(true);
      }}
      isGoogleSignIn={isGoogleSignIn}
    >
      {isGoogleSignIn && (
        <span>
          <GoogleIcon />
        </span>
      )}

      {text}
    </Button>
  );
};

export default LoginButtons;
