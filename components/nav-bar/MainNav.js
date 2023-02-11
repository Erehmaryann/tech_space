import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import ReactSelect from "../common/select";
import { options } from "./cateData";

import {
  Nav,
  LogoDiv,
  NavInput,
  SearchDiv,
  SearchIconDiv,
  NotificationDiv,
  ImageDiv,
  SelectDiv,
} from "./NavStyles";
import logo from "../../public/assets/Logo.png";
import { SearchIcon } from "../Icons/Icon";
import NotIcon from "../notIcon/notIcon";
import ProfileImg from "../../public/assets/svg/profilepix.svg";
import Profiledropdown from "../profiledropdown/profiledropdown";
import NotiDropdown from "../notidropdown/notidropdown";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectProfileHidden } from "../../redux/profile/profile.selectors";
import { selectNotiHidden } from "../../redux/notification/noti.selectors";
import { toggleProfileHidden } from "../../redux/profile/profile.actions";

const MainNav = ({
  hidden,
  toggleProfileHidden,
  toggleNotiHidden,
  notiHidden,
}) => {
  const router = useRouter();
  const path = router.pathname;
  const [option, setOption] = useState(options);

  return (
    <Nav>
      <LogoDiv>
        <Link href="/">
          <a>
            <Image src={logo} alt="logo image" />
          </a>
        </Link>
      </LogoDiv>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          width: "50%",
          height: "37px",
        }}
      >
        {(path === "/dashboard/requests" ||
          path === "/dashboard/topics" ||
          path === "/dashboard/members" ||
          path === "/dashboard/reports") && (
          <SelectDiv>
            <ReactSelect
              setOption={setOption}
              options={options}
              placeholder="Category"
            />
          </SelectDiv>
        )}
        <SearchDiv>
          <SearchIconDiv>
            <SearchIcon />
          </SearchIconDiv>
          <NavInput type="text" placeholder="Search" />
        </SearchDiv>
      </div>
      <NotificationDiv>
        <NotIcon onClick={toggleNotiHidden} />
        {notiHidden ? null : <NotiDropdown />}
        <ImageDiv>
          <Image
            src={ProfileImg}
            alt="profile-img"
            onClick={toggleProfileHidden}
            style={{ borderRadius: "50%" }}
          />
          {hidden ? null : <Profiledropdown />}
        </ImageDiv>
      </NotificationDiv>
    </Nav>
  );
};

const mapStateToProps = createStructuredSelector({
  hidden: selectProfileHidden,
  notiHidden: selectNotiHidden,
});

const mapDispatchToProps = (dispatch) => ({
  toggleProfileHidden: () => dispatch(toggleProfileHidden()),
  toggleNotiHidden: () => dispatch(toggleNotiHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainNav);
