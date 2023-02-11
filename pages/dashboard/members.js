import React from "react";
import Head from "next/head";
import styled from "styled-components";
import Member from "../components/members";

const Members = () => {
  return (
    <>
      <Head>
        <title>Tech Space | Members</title>
      </Head>
      <Container>
        <Member />
      </Container>
    </>
  );
};

const Container = styled.div`
  background: #fff;
  width: 50%;
`;

export default Members;
