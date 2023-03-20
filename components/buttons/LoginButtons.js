import { GoogleIcon } from "../Icons/Icon";
import { Button } from "./ButtonStyle";

const LoginButtons = ({ isGoogleSignIn, text, type, setShowModal }) => {
  return (
    <Button
      type={type}
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
