import WebdevData from '../components/webdev/webdev-data';
import Head from "next/head";
import styled from "styled-components";
//  since you want the login to be the home page.\, we would conditionally render either log in or home page here and then pass it to the index page
const WebDevelopment = () => {
    <Head>
        <title>Tech Space | Web Development</title>
    </Head>;
    return (
        <HomeItemContainer>
            <WebdevData />
        </HomeItemContainer>
    );
};

const HomeItemContainer = styled.div`
  background: #e5e5e5;
`;

export default WebDevelopment;