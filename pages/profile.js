import Head from "next/head";
import styled from "styled-components";
import ProfilePage from '../components/profile-page/profilepage';

const Profile = () => {
    <Head>
        <title>Tech Space | Profile</title>
    </Head>;
    return (
        <ProfileItemContainer>
            <ProfilePage />
        </ProfileItemContainer>
    );
};

const ProfileItemContainer = styled.div`
  /* background: #fff; */
`;

export default Profile;
