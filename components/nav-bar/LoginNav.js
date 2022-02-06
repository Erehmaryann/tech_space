import React from "react";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/assets/Logo.png";

const LoginNav = () => {
  return (
    <Nav>
      <LogoDiv>
        <Link href="/" passHref>
          <Image src={logo} alt="logo image" />
        </Link>
      </LogoDiv>
      <Link href="/signup" passHref>
        <Button>Register</Button>
      </Link>
    </Nav>
  );
};

const Nav = styled.nav`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  width: 100%;
  background: #fff;
  padding: 0 50px;
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
