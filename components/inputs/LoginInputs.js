import styled from "styled-components";
const LoginInputs = ({ type, placeholder, label, name, value }) => {
  return (
    <Div className="bottom">
      <Label>{label}</Label>
      <Input type={type} placeholder={placeholder} name={name} value={value} />
    </Div>
  );
};

const Div = styled.div`
  margin-bottom: 12px;
`;

const Input = styled.input`
  width: 90%;
  border: 1px solid #c4c4c4;
  box-sizing: border-box;
  border-radius: 5px;
  width: 100%;
  height: 43px;
  margin: 10px 0;
  /* background: transparent; */
  background: #F6F6F6;;
  color: #000;
  outline: none;
  padding: 10px;

  ::placeholder {
    padding-left: 20px;
    color: #EBEBEB;
  }
`;

const Label = styled.label`
  text-align: justify !important;
  font-size: 15px;
`;

export default LoginInputs;
