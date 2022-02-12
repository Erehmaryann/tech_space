import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import {
  Nav,
  LogoDiv,
  Button,
  NavInput,
  SearchDiv,
  SearchIconDiv,
  NotificationDiv,
  ImageDiv,
} from "./NavStyles";
import logo from "../../public/assets/Logo.png";
import { SearchIcon, NotiIcon } from "../Icons/Icon";
// import Image from "next/image";
// import ProfileImg from "../../public/assets/";

const MainNav = () => {
  return (
    <Nav>
      <LogoDiv>
        <Link href="/">
          <a>
            <Image src={logo} alt="logo image" />
          </a>
        </Link>
      </LogoDiv>

      <SearchDiv>
        <SearchIconDiv>
          <SearchIcon />
        </SearchIconDiv>
        <NavInput type="text" placeholder="Search" />
      </SearchDiv>
      <NotificationDiv>
        <NotiIcon />
        <ImageDiv />
      </NotificationDiv>
    </Nav>
  );
};
export default MainNav;
