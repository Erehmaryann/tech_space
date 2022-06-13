import { Div, Input, Label } from "./loginInputsStyles";

const LoginInputs = ({ type, placeholder, label, name, value }) => {
  return (
    <Div className="bottom">
      <Label>{label}</Label>
      <Input type={type} placeholder={placeholder} name={name} value={value} />
    </Div>
  );
};


export default LoginInputs;
