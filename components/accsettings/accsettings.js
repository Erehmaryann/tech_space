import { AccSettingsContainer } from "./accSettingsStyles";
import LoginInputs from "../inputs/LoginInputs";

const AccSettings = () => {
  return (
    <AccSettingsContainer>
      <h3>Account</h3>
      <LoginInputs
        type={`text`}
        placeholder={`+2348125671212`}
        label={`Phone number`}
        name={`phone`}
      />
      <LoginInputs
        type={`email`}
        placeholder={`Maryannereh@gmail.com`}
        label={`Email address`}
        name={`email`}
      />
      <button className="button">Save</button>
    </AccSettingsContainer>
  );
};

export default AccSettings;
