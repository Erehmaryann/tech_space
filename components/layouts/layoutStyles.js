import styled from "styled-components";

export const Container = styled.div`
  display: ${(props) => (props.report === "/report" ? "none" : "flex")};
  width: 100%;
  min-height: 100vh;
  background: #e5e5e5;
  padding-top: 80px;
`;
