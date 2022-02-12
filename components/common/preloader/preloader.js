/* eslint-disable @next/next/no-img-element */
import React from "react";
import Logo from '../../../public/assets/Logo.png';
// import logo from "/assets/Logo.png";


const Loading = () => {
  return (
    <div className="vh-100 d-flex align-items-center justify-content-center">
      <span className="fallback__preolader--logo-wrapper">
        <img className="fallback__preolader--logo" src={Logo} alt="logo" />
      </span>
    </div>
  );
};

export default Loading;
