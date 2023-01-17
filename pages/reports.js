import React from "react";
import Head from "next/head";
import styled from "styled-components";
import ReportChart from "../components/reports";

const Reports = () => {
  return (
    <>
      <Head>
        <title>Tech Space | Reports</title>
      </Head>
      <Container>
        <ReportChart />
      </Container>
    </>
  );
};

const Container = styled.div`
  background: #e5e5e5;
  width: 75%;
`;

export default Reports;
