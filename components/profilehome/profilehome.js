import { ProContainer } from "./profileHomeStyles";

const ProfileHome = ({ data }) => {
  return (
    <ProContainer>
      <div className="profile-item">
        <b>Email address:</b> <span>{data?.email}</span>
      </div>
      <div className="profile-item">
        <b>Phone:</b> <span>+2348184646092</span>
      </div>
    </ProContainer>
  );
};

export default ProfileHome;
