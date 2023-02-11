import Maintenance from "../../components/maintenance/maintenance-repair";
import Head from "next/head";
import styled from "styled-components";
//  since you want the login to be the home page.\, we would conditionally render either log in or home page here and then pass it to the index page
const ComputerRepair = () => {
  return (
    <>
      <Head>
        <title>Tech Space | Computer repair/maintenance</title>
      </Head>

      <HomeItemContainer>
        <Maintenance />
      </HomeItemContainer>
    </>
  );
};

const HomeItemContainer = styled.div`
  background: #e5e5e5;
  width: 50%;
`;

export default ComputerRepair;
