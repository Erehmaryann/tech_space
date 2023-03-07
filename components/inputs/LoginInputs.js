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
  return (
    <Div className="bottom">
      <Label>{label}</Label>
      <Input
        autoComplete="false"
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
