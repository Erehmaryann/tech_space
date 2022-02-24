import React from "react";
import Logo from "../../../public/assets/Logo.png";
import Image from "next/image";
import styled from "styled-components";

const Loading = () => {
  return (
    <Loader>
      <span>
        <Image src={Logo} alt="logo" />
      </span>
    </Loader>
  );
};

const Loader = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff
`;

export default Loading;
