import React from "react";
import Head from "next/head";
import styled from "styled-components";

const Topics = () => {
  return (
    <>
      <Head>
        <title>Tech Space | Topics</title>
      </Head>
      <Container>
        <h2>Topics</h2>
      </Container>
    </>
  );
};

const Container = styled.div`
  background: #e5e5e5;
  width: 50%;
`;

export default Topics;
