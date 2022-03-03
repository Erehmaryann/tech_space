import Head from "next/head";
import styled from "styled-components";
import ProfilePage from '../components/profile-page/profilepage';
//  since you want the login to be the home page.\, we would conditionally render either log in or home page here and then pass it to the index page
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
  background: #fff;
`;

export default Profile;
