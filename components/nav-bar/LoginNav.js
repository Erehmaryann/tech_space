import React from "react";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/assets/Logo.png";
import device from "../utils/Devices";
import { useRouter } from "next/router";

const LoginNav = () => {
  const router = useRouter();
  const path = router.pathname;

  return (
    <Nav>
      <LogoDiv>
        <Link href="/">
          <a>
            <Image src={logo} alt="logo image" />
          </a>
        </Link>
      </LogoDiv>

      {path === "/" && (
        <Link href="/signup">
          <a>
            <Button>Register</Button>
          </a>
        </Link>
      )}
    </Nav>
  );
};

const Nav = styled.nav`
  position: fixed;
  top: 0px;
  left: 0px;
  // width: 100%;
  z-index: 1000;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  width: 100%;
  background: #fff;
  padding: 0 50px;
  a {
    text-decoration: none;
  }
  @media ${device.mobile} {
    padding: 0 20px;
  } ;
`;

const LogoDiv = styled.div``;

const Button = styled.button`
  width: 113px;
  height: 28px;
  background: #409de0;
  box-shadow: 0px 5px 8px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  // typography
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  line-height: 22px;
  color: #ebebeb;
  text-decoration: none;
`;
export default LoginNav;
