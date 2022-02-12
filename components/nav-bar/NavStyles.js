import styled from "styled-components";
import device from "../utils/Devices";

export const Nav = styled.nav`
  position: sticky;
  top: 0px;
  left: 0px;
  // width: 100%;
  z-index: 1000;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
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

export const LogoDiv = styled.div`
  width: 10%;
  border: 1px solid red;
`;

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

export const SearchDiv = styled.div`
  width: 50%;
  box-sizing: border-box;
  position: relative;
  display: flex;
  border: 1px solid blue;
`;

export const NavInput = styled.input`
  width: 100%;
  height: 37px;
  padding: 0;
  border: none;
  background: #f7f7f7;
  border-radius: 10px;

  ::placeholder {
    color: red;
  }
`;
export const SearchIconDiv = styled.span`
  position: absolute;
  bottom: 50px;
  left: 10px;
`;
