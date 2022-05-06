import React from "react";
import Logo from "../../../public/assets/Logo.png";
import Image from "next/image";
import { Loader } from "./preloaderStyles";

const Loading = () => {
  return (
    <Loader>
      <span>
        <Image src={Logo} alt="logo" />
      </span>
    </Loader>
  );
};

export default Loading;
