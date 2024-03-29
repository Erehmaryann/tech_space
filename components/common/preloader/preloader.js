import React from "react";
import Logo from "../../../public/assets/Logo.png";
import Image from "next/image";
import Spinner from "../spinner/spinner";
import { Loader } from "./preloaderStyles";

const Loading = () => {
  return (
    <Loader>
      <Image src={Logo} alt="logo" />
      &nbsp;
      <Spinner color="#409DE0" />
    </Loader>
  );
};

export default Loading;
