import Image from "next/image";
import Link from "next/link";
import {
  Nav,
  LogoDiv,
  NavInput,
  SearchDiv,
  SearchIconDiv,
  NotificationDiv,
  ImageDiv,
} from "./NavStyles";
import logo from "../../public/assets/Logo.png";
import { SearchIcon, } from "../Icons/Icon";
import NotIcon from '../notIcon/notIcon';
import ProfileImg from "../../public/assets/svg/profilepix.svg";
import Profiledropdown from '../profiledropdown/profiledropdown';
import { connect } from "react-redux";
import { createStructuredSelector } from 'reselect';
import { selectProfileHidden } from "../../redux/profile/profile.selectors";
import { toggleProfileHidden } from "../../redux/profile/profile.actions";

const MainNav = ({ hidden, toggleProfileHidden }) => {
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
        <NotIcon />
        <ImageDiv>
          <Image src={ProfileImg} alt="profile-img" onClick={toggleProfileHidden} />
          {hidden ? null : <Profiledropdown />}
        </ImageDiv>
      </NotificationDiv>
    </Nav>
  );
};

const mapStateToProps = createStructuredSelector({
  hidden: selectProfileHidden
});

const mapDispatchToProps = (dispatch) => ({
  toggleProfileHidden: () => dispatch(toggleProfileHidden())
});

export default connect(mapStateToProps, mapDispatchToProps)(MainNav);
