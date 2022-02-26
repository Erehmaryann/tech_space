import styled from "styled-components";
const LoginInputs = ({ type, placeholder }) => {
  return <Input type={type} placeholder={placeholder}></Input>;
};

const Input = styled.input`
  width: 90%;
  border: 1px solid #c4c4c4;
  box-sizing: border-box;
  border-radius: 5px;
  width: 100%;
  height: 53px;
  margin: 10px 0;
  background: transparent;
  color: #000;
  padding: 20px;

  ::placeholder {
    padding-left: 20px;
  }
`;
export default LoginInputs;
