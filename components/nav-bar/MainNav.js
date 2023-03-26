/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import ReactSelect from "../common/select";
import { options } from "./cateData";

import {
  Nav,
  LogoDiv,
  // NavInput,
  // SearchDiv,
  // SearchIconDiv,
  // SelectDiv,
  NotificationDiv,
  ImageDiv,
} from "./NavStyles";
import { useUser } from "../../helper/get-user";
import logo from "../../public/assets/Logo.png";
// import { SearchIcon } from "../Icons/Icon";
import NotIcon from "../notIcon/notIcon";
import Profiledropdown from "../profiledropdown/profiledropdown";
import NotiDropdown from "../notidropdown/notidropdown";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectProfileHidden } from "../../redux/profile/profile.selectors";
import { selectNotiHidden } from "../../redux/notification/noti.selectors";
import { toggleProfileHidden } from "../../redux/profile/profile.actions";
import { makeApiCall } from "../../lib/api";

const MainNav = ({
  hidden,
  toggleProfileHidden,
  toggleNotiHidden,
  notiHidden,
}) => {
  // const router = useRouter();
  // const path = router.pathname;
  // const [option, setOption] = useState(options);
  const user = useUser() || null;

  const [getUserProfile, setGetUserProfile] = useState([]);
  // const [searchQuery, setSearchQuery] = useState("");
  // const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    // make a GET request to retrieve data from the API endpoint
    // make a GET request to retrieve userprofile data from the API endpoint
    makeApiCall(`/userprofile/${user?._id}`)
      .then((responseData) => {
        setGetUserProfile(responseData?.message);
      })
      .catch((error) => {
        toast.error(error);
      });

    // if (searchQuery !== "") {
    //   makeSearchRequest();
    // }
  }, [user?._id]);

  // const makeSearchRequest = async () => {
  //   try {
  //     const response = await makeApiCall(`/search?search=${searchQuery}`);
  //     setSearchResults(response.message);
  //   } catch (error) {
  //     toast.error(error);
  //   }
  // };

  // const onSubmit = (e) => {
  //   e.preventDefault();
  //   makeSearchRequest();
  // };

  // const onInputChange = (e) => {
  //   setSearchQuery(e.target.value);
  // };

  // const onPress = (e) => {
  //   if (e.key === "Enter") {
  //     onSubmit(e);
  //   }
  // };

  return (
    <Nav>
      <LogoDiv>
        <Link href="/">
          <a>
            <Image src={logo} alt="logo image" />
          </a>
        </Link>
      </LogoDiv>
      {/* <div
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
        <SearchDiv onSubmit={onSubmit}>
          <SearchIconDiv>
            <SearchIcon />
          </SearchIconDiv>
          <NavInput
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={onInputChange}
            onKeyDown={onPress}
          />
        </SearchDiv>
      </div> */}
      <NotificationDiv>
        <NotIcon onClick={toggleNotiHidden} />
        {notiHidden ? null : <NotiDropdown />}
        <ImageDiv>
          <img
            src={
              getUserProfile.profileimg
                ? getUserProfile?.profileimg
                : "/assets/svg/sideDp.svg"
            }
            width={"50px"}
            height={"50px"}
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
