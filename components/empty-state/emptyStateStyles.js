import styled from "styled-components";

export const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 700px;
  height: 500px;
  background-color: #f5f5f5;
  margin: 25px 0;
  padding: 20px;
  box-sizing: border-box;
  border-radius: 10px;

  h5 {
    color: #374956;
    padding: 10px;
  }

  small {
    padding: 10px;
    color: #c4c4c4;
  }
`;

export const Button = styled.button`
  background-color: #409de0;
  cursor: pointer;
  width: 130px;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px;
  box-shadow: 0px 5px 8px rgba(64, 157, 224, 0.15);
  border-radius: 10px;
  border: none;
  outline: none;
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  color: #ebebeb;
`;
