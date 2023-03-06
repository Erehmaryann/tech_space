import { ProContainer } from "./profileHomeStyles";

const ProfileHome = ({ data }) => {
  return (
    <ProContainer>
      <div className="profile-item">
        <b>Email address:</b>{" "}
        <span>{data?.email ? data?.email : "Please go to settings"}</span>
      </div>
      <div className="profile-item">
        <b>Phone:</b> <span>{data?.phone || "Please update your profile"}</span>
      </div>
    </ProContainer>
  );
};

export default ProfileHome;
