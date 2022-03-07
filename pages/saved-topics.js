import Head from "next/head";
import styled from "styled-components";
import SavedData from '../components/savedpage/saved-data';
//  since you want the login to be the home page.\, we would conditionally render either log in or home page here and then pass it to the index page
const Saved = () => {
    return (
        <>
            <Head>
                <title>Tech Space | Saved</title>
            </Head>
            <SavedItemContainer>
                <SavedData />
            </SavedItemContainer>
        </>
    );
};

const SavedItemContainer = styled.div`
  background: #e5e5e5;
`;

export default Saved;
