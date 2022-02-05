import React from "react";
import styled from "styled-components";
import CustomButton from "../components/customButton/customBotton";
// import CustomButton from "../components/CustomButton/CustomBotton";

const Login = () => {
  return (
    <div>
      <h1>Log in</h1>
      <CustomButton isGoogleSignIn={true}>
        <p>click me</p>
      </CustomButton>
    </div>
  );
};

export default Login;
