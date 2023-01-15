import styled from "styled-components";

export const MembersContainer = styled.div`
  width: 100%;
  // border: 1px solid red;
  height: 100%;
  padding: 42px 48px;
  h2 {
    font-weight: 400;
    font-size: 29px;
    color: #374956;
  }
`;

export const StyledTable = styled.div`
  width: 100%;
  // border: 1px solid yellow;
  table {
    width: 100%;
  }
  thead {
    background: #fff;
    height: 70px;
    width: 100%;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 19px;
    line-height: 28px;
    text-align: left;
    color: #374956;
  }
  th {
    padding-left: 10px;
    padding-right: 10px;
    font-family: "Manrope";
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 19px;
    white-space: nowrap;
    cursor: pointer;
  }
  tr {
    height: 58px;
  }
  tr:nth-child(even) {
    background: #f6f6f6;
  }
  tr:hover {
    transform: scaleY(1.07);
  }
  td {
    /* background: #ffffff; */
    // border-radius: 0px;
    padding-left: 10px;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    cursor: pointer;
    color: #7c858d;
    white-space: nowrap;
    border: none;
  }
`;
