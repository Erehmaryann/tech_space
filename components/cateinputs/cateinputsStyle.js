import styled from "styled-components";

export const ButDiv = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Button = styled.button`
  background: #409de0;
  cursor: pointer;
  width: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  box-shadow: 0px 5px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  border: none;
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  color: #ebebeb;
  text-decoration: none;
`;

export const CateDiv = styled.form`
  width: 400px;
  .input-group {
    padding: 5px;
    label {
      text-align: justify !important;
    }
    .input {
      margin-top: 5px;
      display: block;
      width: 100%;
      background: #f5f5f5;
      border: none;
      border-radius: 10px;
      outline: none;
      margin-bottom: 10px;
      padding: 12px;
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
    input[type="file"] {
      display: none;
    }
  }
  .rev {
    object-fit: contain;
  }
`;
