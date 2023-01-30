import styled from "styled-components";

export const ReportContainer = styled.div`
  padding-right: 46px;
  padding-top: 12px;
  padding-bottom: 50px;
  width: 100%;

  h2 {
    font-weight: 500;
    font-size: 20px;
    color: #374956;
    padding-bottom: 14px;
  }
`;

export const ChartContainer = styled.div`
  padding-top: 28px;
  height: 448px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(55, 73, 86, 0.07);
  border-radius: 10px;
  position: relative;
  .first-div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 20px;
    padding-right: 24px;

    .download-button {
      width: 118.7px;
      height: 37px;
      background: #f9f9f9;
      border-radius: 8px;
      border: none;
      outline: none;
      display: flex;
      align-items: center;
      justify-content: center;
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      color: #374956;
      cursor: pointer;
    }
  }

  .second-div {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    p {
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      margin: 0;
      display: flex;
      align-items: center;
      color: #374956;
    }

    h6 {
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      margin: 0;

      /* identical to box height */

      display: flex;
      align-items: center;

      color: #409de0;
    }
  }
`;

export const ChartStyles = styled.div`
  width: 100%;
  height: 291px;
  padding-right: 24px;
  position: absolute;
  bottom: 0;
`;

export const OverContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .chart-table-container {
    width: 700px;
  }

  .total-num-post {
    width: 300px;
  }
`;

export const BgContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 210px;
  padding: 12px 20px;
  background: ${(props) => props.bg};
  box-shadow: 0px 4px 4px rgba(55, 73, 86, 0.07);
  border-radius: 10px;
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 84px;
  height: 84px;
  background: ${(props) => props.bg};
  border-radius: 10px;
`;

export const H4 = styled.div`
  font-weight: 600;
  font-size: 20px;
  color: ${(props) => props.color};
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
  width: 100%;
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

export const Div = styled.div`
  display: flex;
  align-items: center;
  p {
    margin-left: 20px;
  }
`;

export const ImgDiv = styled.div`
  width: 34px;
  height: 34px;
  border-radius: 50%;

  img {
    border-radius: 50%;
  }
`;

export const ActivityTableContainer = styled.div`
  margin-top: 25px;
  width: 100%;
  height: 280px;
  overflow-y: scroll;
  padding: 19px;
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
  }

  th {
    font-weight: 400;
    font-size: 14px;
    color: #9c9c9c;
    padding-top: 12px;
    white-space: nowrap;
    cursor: pointer;
  }

  tr {
    width: 100%;
    height: 58px;
  }

  tr:hover {
    transform: scaleY(1.07);
  }

  td {
    font-weight: 400;
    font-size: 14px;
    cursor: pointer;
    color: #374956;
    white-space: nowrap;
    border: none;
  }

  td:last-child {
    color: #409de0;
  }
`;

export const ActivityTableHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 0.5px solid #eaeaea;

  h4 {
    font-weight: 500;
    font-size: 18px;
    color: #374956;
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
