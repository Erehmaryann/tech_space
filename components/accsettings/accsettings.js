import { useState } from "react";
import { toast } from "react-hot-toast";
import { makeApiCall } from "../../lib/api";
import Spinner from "../common/spinner/spinner";
import LoginInputs from "../inputs/LoginInputs";
import { AccSettingsContainer } from "./accSettingsStyles";

const AccSettings = () => {
  const [loading, setLoading] = useState(false);
  const [accDetails, setAccDetails] = useState({
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setAccDetails((values) => ({
      ...values,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const response = await makeApiCall("/update/account", "PATCH", accDetails);
    if (response?.message === "phone and email updated") {
      toast.success(response?.message);
      setAccDetails({
        email: "",
        phone: "",
      });
      setLoading(false);
      return;
    }
    setLoading(false);
    if (response?.message !== "phone and email updated") {
      toast.error(response?.response?.data?.message);
      setAccDetails({
        email: "",
        phone: "",
      });
      return;
    }
  };

  return (
    <AccSettingsContainer onSubmit={(e) => handleSubmit(e)} autoComplete="off">
      <h3>Account</h3>
      <LoginInputs
        type={`text`}
        placeholder={`+2348125671212`}
        value={accDetails.phone}
        onChange={handleChange}
        label={`Phone number`}
        name={`phone`}
      />
      <LoginInputs
        type={`email`}
        placeholder={`Maryannereh@gmail.com`}
        value={accDetails.email}
        onChange={handleChange}
        label={`Email address`}
        name={`email`}
      />
      <button className="button" type="submit">
        {loading ? <Spinner color="#fff" /> : "Save"}
      </button>
    </AccSettingsContainer>
  );
};

export default AccSettings;
