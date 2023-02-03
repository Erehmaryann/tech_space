import styled from "styled-components";

export const Div = styled.div`
  margin-bottom: 12px;
`;

export const Input = styled.input`
  width: 90%;
  border: none;
  border-radius: 5px;
  width: 100%;
  height: 43px;
  margin: 10px 0;
  /* background: transparent; */
  background: #f6f6f6;
  color: #000;
  outline: none;
  padding: 10px;

  ::placeholder {
    padding-left: 20px;
    color: #374956;
  }
`;

export const Label = styled.label`
  text-align: justify !important;
  font-size: 15px;
`;
