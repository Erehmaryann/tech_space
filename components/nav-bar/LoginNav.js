import React from "react";
import styled from "styled-components";
import Link from "next/link";

const LoginNav = () => {
  return (
    <Nav>
      <LogoDiv>
        <Link href="/"> Logo </Link>
      </LogoDiv>
      <Button>
        <Link href="/login">Register </Link>
      </Button>
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  width: 100%;
  background: #fff;
  border: 1px solid red;
`;

const LogoDiv = styled.div`
  margin-left: 50px;
`;

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
  margin-right: 50px;

  a {
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 15px;
    line-height: 22px;
    color: #ebebeb;
    text-decoration: none;
  }
`;
export default LoginNav;
