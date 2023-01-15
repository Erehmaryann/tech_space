import styled from "styled-components";

export const CustomDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 15px;
  border-bottom: 3px solid #f9f9f9;

  &: hover {
    background-color: #abcee7;
  }

  .pix {
    margin-top: 10px;
  }

  .action {
    p {
      font-size: 12px;
      margin-bottom: 0px;

      span {
        color: #409de0;
      }
    }
    small {
      font-size: 10px;
      color: #c4c4c4;
      /* margin-top: -0px; */
    }
  }
  small {
    color: #c4c4c4;
    font-size: 10px;
  }
  a {
    font-size: 9px;
    color: #c4c4c4;
  }
`;
