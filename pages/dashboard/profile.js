import Head from "next/head";
import styled from "styled-components";
import ProfilePage from "../components/profile-page/profilepage";

const Profile = () => {
  return (
    <>
      <Head>
        <title>Tech Space | Profile</title>
      </Head>
      <ProfileItemContainer>
        <ProfilePage />
      </ProfileItemContainer>
    </>
  );
};

const ProfileItemContainer = styled.div``;

export default Profile;
