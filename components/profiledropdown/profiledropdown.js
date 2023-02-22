import { connect } from "react-redux";
import { toggleProfileHidden } from "../../redux/profile/profile.actions";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import { ProDiv } from "./proStyles";
import Link from "next/link";

const Profiledropdown = ({ toggleProfileHidden }) => {
  const router = useRouter();
  const path = router.pathname;

  // logout
  const handleLogout = () => {
    Cookies.remove("user_token");
    Cookies.remove("user_details");
    router.push("/");
  };

  return (
    path !== "/dashboard/requests" &&
    path !== "/dashboard/topics" &&
    path !== "/dashboard/members" &&
    path !== "/dashboard/reports" && (
      <ProDiv className="pro-dropdown">
        <div className="pro-items">
          <span onClick={toggleProfileHidden}>
            <Link href="/dashboard/profile">My Profile</Link>
          </span>
          <span onClick={toggleProfileHidden}>
            <Link href="/dashboard/settings">Settings</Link>
          </span>
          <span onClick={handleLogout}>
            <span onClick={toggleProfileHidden}>Logout</span>
          </span>
        </div>
      </ProDiv>
    )
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleProfileHidden: () => dispatch(toggleProfileHidden()),
});

export default connect(null, mapDispatchToProps)(Profiledropdown);
