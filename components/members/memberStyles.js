import styled from "styled-components";

export const MembersContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 42px 0px;
  h2 {
    font-weight: 400;
    font-size: 29px;
    color: #374956;
    padding-left: 48px;
  }
`;

export const StyledTable = styled.div`
  width: 100%;
  height: 100vh;
  overflow-y: scroll;

  table {
    width: 100%;
    border-collapse: collapse;
  }
  thead {
    background: #fff;
    width: 100%;
    font-weight: 500;
    text-align: left;
    color: #374956;
  }
  th {
    padding-left: 10px;
    padding-right: 10px;
    font-weight: 500;
    font-size: 16px;
    padding: 21px 0px 21px 46px;
    white-space: nowrap;
    cursor: pointer;
  }
  tr {
    height: 58px;
    padding: 21px 0;
  }
  tr:nth-child(even) {
    background: #f6f6f6;
  }
  tr:hover {
    transform: scaleY(1.07);
  }
  td {
    padding-left: 10px;
    font-weight: 500;
    font-size: 14px;
    cursor: pointer;
    color: #374956;
    white-space: nowrap;
    border: none;
  }
  td:first-child {
    color: #409de0;
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

export const Div = styled.div`
  display: flex;
  align-items: center;
  p {
    margin-left: 20px;
  }
`;
