import styled from "styled-components";

export const ReportContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 12px 46px 46px 0;

  h2 {
    font-weight: 500;
    font-size: 20px;
    color: #374956;
    padding-bottom: 14px;
  }
`;

export const ChartContainer = styled.div`
  width: 782px;
  height: 448px;
  padding: 27px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(55, 73, 86, 0.07);
  border-radius: 10px;
`;

export const OverContainer = styled.div`
  /* width: 100% */
  display: flex;
  justify-content: space-between;
  align-items: center;

  .chart-table-container {
    width: 50%;
  }

  .total-num-post {
    width: 25%;
  }
`;

export const MemberHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 19px;

  h4 {
    font-weight: 500;
    font-size: 18px;
    color: #374956;
  }

  a {
    font-weight: 500;
    font-size: 14px;
    color: #409de0;

    &:hover {
      border-bottom: 1px solid #409de0;
    }
  }
`;

export const TableContainer = styled.div`
  width: 782px;
  height: 280px;
  overflow-y: scroll;
  margin-top: 26px;
  padding: 0px 30px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(55, 73, 86, 0.07);
  border-radius: 10px;

  table {
    width: 100%;
    border-collapse: collapse;
  }

  thead {
    background: #fff;
    width: 100%;
    text-align: left;
    border-top: 0.5px solid #eaeaea;
    border-bottom: 0.5px solid #eaeaea;
  }

  th {
    font-weight: 400;
    font-size: 14px;
    color: #9c9c9c;
    padding-top: 12px;
    padding-bottom: 18px;
    white-space: nowrap;
    cursor: pointer;
  }

  th:nth-child(3) {
    text-align: center;
  }

  tr {
    width: 100%;
    height: 58px;
    padding: 21px 0;
    border-bottom: 0.5px solid #eaeaea;
  }

  tr:hover {
    transform: scaleY(1.07);
  }

  td {
    font-weight: 500;
    font-size: 12px;
    cursor: pointer;
    color: #374956;
    white-space: nowrap;
    border: none;
  }

  td:nth-child(2),
  td:nth-child(3) {
    text-align: center;
  }
`;

export const Status = styled.div`
  width: 69px;
  height: 24px;
  background: #f7f8f8;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  color: ${(props) => (props.status === "Online" ? "#56C568" : "#CF2A2A")};
`;
