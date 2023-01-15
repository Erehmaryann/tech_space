import styled from "styled-components";
import device from "../utils/Devices";

export const Nav = styled.nav`
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 1000;
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
  // typograph
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  line-height: 22px;
  color: #ebebeb;
  text-decoration: none;
`;

export const SearchDiv = styled.div`
  width: 549px;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NavInput = styled.input`
  width: 100%;
  height: 100%;
  padding: 0;
  border: none;
  background: #f7f7f7;
  color: #409de0;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;

  ::placeholder {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    color: #374956;
    padding-left: 40px;
  }
  :focus {
    outline: none;
    padding-left: 40px;
  }
`;
export const SearchIconDiv = styled.div`
  position: absolute;
  left: 10px;
`;

export const NotificationDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 10%;
  height: 51px;
`;

export const ImageDiv = styled.div`
  width: 48.45px;
  cursor: pointer;
`;

export const SelectDiv = styled.div`
  width: 162px;
  margin-top: 5px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
`;
