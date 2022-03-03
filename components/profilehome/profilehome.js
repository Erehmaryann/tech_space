import styled from "styled-components";

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

const ProContainer = styled.div`
  .profile-item {
    padding-bottom: 1.6rem;

    b {
        color: #374956;
        padding-right: 2rem
    }
    span {
      color: #C4C4C4
    }
  }
`;

export default ProfileHome;