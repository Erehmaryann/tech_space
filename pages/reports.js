import React from "react";
import Head from "next/head";
import styled from "styled-components";

const Reports = () => {
  return (
    <>
      <Head>
        <title>Tech Space | Reports</title>
      </Head>
      <Container>
        <h2>Reports</h2>
      </Container>
    </>
  );
};

const Container = styled.div`
  background: #e5e5e5;
  width: 75%;
`;

export default Reports;
