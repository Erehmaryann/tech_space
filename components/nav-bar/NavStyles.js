import styled from "styled-components";
import device from "../utils/Devices";

export const Nav = styled.nav`
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

export const LogoDiv = styled.div``;

export const Button = styled.button`
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
