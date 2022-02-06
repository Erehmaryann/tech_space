const size = {
  small: "325px",
  mobile: "500px",
  tablet: "900px",
  large: "1120px",
};

const devices = {
  small: `(max-width: ${size.small})`,
  mobile: `(max-width: ${size.mobile})`,
  tablet: `(max-width: ${size.tablet})`,
  large: `(max-width: ${size.large})`,
};

export default devices;
