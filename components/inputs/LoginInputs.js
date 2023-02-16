import { Div, Input, Label } from "./loginInputsStyles";

const LoginInputs = ({
  type,
  placeholder,
  label,
  name,
  value,
  onChange,
  required,
}) => {
  console.log(required);
  return (
    <Div className="bottom">
      <Label>{label}</Label>
      <Input
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
      />
    </Div>
  );
};

export default LoginInputs;
