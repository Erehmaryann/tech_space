import styled from "styled-components";
import { GoogleIcon } from "../Icons/Icon";

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

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 41px;
  background: #ffffff;
  margin: 10px 0;
  /* Blue shadow */
  box-shadow: 0px 5px 8px rgba(64, 157, 224, 0.15);
  background: ${(props) => (props.isGoogleSignIn ? "#fff" : "#409DE0")};
  color: ${(props) => (props.isGoogleSignIn ? "#109FEF" : "#fff")};
  border: none;

  span {
    margin-right: 10px;
  }
`;

export default LoginButtons;
