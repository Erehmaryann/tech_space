import styled from "styled-components";

export const AccParent = styled.div`
  background: #fff;
  padding: 20px;

  .img {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h3 {
      color: #409de0;
      font-size: 17px;
      margin-top: -2px;
    }
  }

  .button {
    width: 74px;
    background: #409de0;
    border-radius: 15px;
    color: #fff;
    border: none;
    outline: none;
    padding: 10px;
    font-size: 16px;
    cursor: pointer;
  }
  .input-group {
    label {
      text-align: justify !important;
    }

    textarea {
      margin-top: 5px;
      display: block;
      width: 100%;
      background: #f5f5f5;
      border: none;
      border-radius: 10px;
      outline: none;
      margin-bottom: 10px;
      padding: 15px;
    }
  }
`;
