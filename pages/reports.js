import React from "react";
import Head from "next/head";
import styled from "styled-components";
import ReportChart from "../components/reports";
import Styled from "styled-components";

const Reports = () => {
  return (
    <>
      <Head>
        <title>Tech Space | Reports</title>
      </Head>
      <Container>
        {/* <h2>Reports</h2> */}
        <Div>
          <ReportChart />
        </Div>
      </Container>
    </>
  );
};

const Container = styled.div`
  background: #e5e5e5;
  width: 75%;
`;
const Div = Styled.div`
height: 447.71px;
`;

export default Reports;
