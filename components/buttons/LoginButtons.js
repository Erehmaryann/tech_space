import React from "react";
import styled from "styled-components";

const LoginButtons = ({ isGoogleSignIn, text }) => {
  return <Button isGoogleSignIn={isGoogleSignIn}>{text}</Button>;
};

const Button = styled.button`
  width: 336px;
  height: 41px;
  background: #ffffff;
  margin: 10px 0;
  /* Blue shadow */
  box-shadow: 0px 5px 8px rgba(64, 157, 224, 0.15);
  background: ${(props) => (props.isGoogleSignIn ? "#fff" : "#409DE0")};
  color: ${(props) => (props.isGoogleSignIn ? "#109FEF" : "#fff")};
  border: none;
`;

export default LoginButtons;
