import styled from "styled-components";
export const ProDiv = styled.div`
  position: absolute;
  width: 140px;
  height: 180px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  background: #f6f6f6;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
  top: 80px;
  border-radius: 10px;
  right: 20px;
  z-index: 5;

  .pro-items {
    height: 240px;
    display: flex;
    flex-direction: column;

    span {
      padding: 10px 5px;
      font-size: 14px;

      :hover {
        background: #abcee7;
      }
    }
  }
`;
