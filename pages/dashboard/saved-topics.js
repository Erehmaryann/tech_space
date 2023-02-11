import Head from "next/head";
import styled from "styled-components";
import SavedData from "../../components/savedpage/saved-data";

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
