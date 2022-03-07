import ProgrammingData from '../components/programming/programmingData';
import Head from "next/head";
import styled from "styled-components";
//  since you want the login to be the home page.\, we would conditionally render either log in or home page here and then pass it to the index page
const Programming = () => {
    <Head>
        <title>Tech Space | Programming</title>
    </Head>;
    return (
        <HomeItemContainer>
            <ProgrammingData />
        </HomeItemContainer>
    );
};

const HomeItemContainer = styled.div`
  background: #e5e5e5;
`;

export default Programming;
