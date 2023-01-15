import { ProContainer } from "./profileHomeStyles";

const ProfileHome = () => {
  return (
    <ProContainer>
      <div className="profile-item">
        <b>Email address:</b> <span>maryannereh@gmail</span>
      </div>
      <div className="profile-item">
        <b>Phone:</b> <span>+2348184646092</span>
      </div>
    </ProContainer>
  );
};

export default ProfileHome;
