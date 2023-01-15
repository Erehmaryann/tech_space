import React from "react";
import Head from "next/head";
import styled from "styled-components";

const Members = () => {
  return (
    <>
      <Head>
        <title>Tech Space | Members</title>
      </Head>
      <Container>
        <h2>Members</h2>
      </Container>
    </>
  );
};

const Container = styled.div`
  background: #e5e5e5;
  width: 50%;
`;

export default Members;
