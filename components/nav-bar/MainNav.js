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
} from "./NavStyles";
import logo from "../../public/assets/Logo.png";
import { SearchIcon } from "../Icons/Icon";

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
          {/* <div>test</div> */}
        </SearchIconDiv>
        <NavInput type="text" placeholder="Search" />
      </SearchDiv>
      <div>test</div>
    </Nav>
  );
};
export default MainNav;
