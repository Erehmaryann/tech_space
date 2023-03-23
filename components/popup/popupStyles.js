import styled from "styled-components";

export const PopupDiv = styled.div`
  display: flex;
  justify-content: space-between;
  color: #fff;
  font-size: 13px;
  background: #409de0;
  width: 233px;
  position: absolute;
  padding: 15px;
  z-index: 100;
  top: -65px;
  right: -150px;
  border-radius: 15px;

  .view {
    cursor: pointer;
  }
`;
