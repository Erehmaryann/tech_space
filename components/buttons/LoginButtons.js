import React from "react";
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
