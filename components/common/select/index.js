import Select from "react-select";

const SelectStyle = {
  valueContainer: (provided) => ({
    ...provided,
    display: "flex",
    alignItems: "center",
  }),
  control: (provided, state) => ({
    ...provided,
    width: "100%",
    marginTop: "5px",
    height: "100%",
    background: "#eaeaea",
    border: "none",
    borderTopLeftRadius: "10px",
    borderBottomLeftRadius: "10px",
    borderBottomRightRadius: "0px",
    borderTopRightRadius: "0px",
    outline: "none",
    marginBottom: "10px",
    boxShadow: state.isFocused ? "none" : 0,
  }),
  option: (provided, state) => ({
    ...provided,
    display: "flex",
    justifyContent: "center",
    textALign: "center",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "16px",
    paddingLeft: "10px",
    color: "#374956",
  }),

  singleValue: (provided) => ({
    ...provided,
    color: "#374956",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "16px",
    letterSpacing: "0.06em",
  }),
  placeholder: (provided) => ({
    ...provided,
    color: "#374956",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "16px",
    letterSpacing: "0.06em",
  }),
  indicatorSeparator: (provided) => ({
    ...provided,
    display: "none",
  }),
};

export default function ReactSelect({
  options,
  placeholder = "Select a category",
  setOption,
}) {
  const handleChange = (selectedOption) => {
    setOption(selectedOption);
  };

  return (
    <Select
      placeholder={placeholder}
      options={options}
      styles={SelectStyle}
      defaultValue={placeholder}
      onChange={handleChange}
      isSearchable={false}
    />
  );
}
