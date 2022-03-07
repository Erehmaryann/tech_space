import Head from "next/head";
import styled from "styled-components";
import TrendData from '../components/trendingpage/trending-data';

//  since you want the login to be the home page.\, we would conditionally render either log in or home page here and then pass it to the index page
const Trend = () => {

    return (
        <>
            <Head>
                <title>Tech Space | Trend</title>
            </Head>
            <TrendItemContainer>
                <TrendData />
            </TrendItemContainer>
        </>
    );
};

const TrendItemContainer = styled.div`
  background: #e5e5e5;
`;

export default Trend;
