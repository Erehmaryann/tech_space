import React from "react";
import Head from "next/head";
import styled from "styled-components";

const Requests = () => {
  return (
    <>
      <Head>
        <title>Tech Space | Requests</title>
      </Head>
      <Container>
        <h2>Admin Dashboard</h2>
      </Container>
    </>
  );
};

const Container = styled.div`
  background: #e5e5e5;
  width: 50%;
`;

export default Requests;
