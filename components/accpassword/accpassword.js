import { useState } from "react";
import { toast } from "react-hot-toast";
import { makeApiCall } from "../../lib/api";
import Spinner from "../common/spinner/spinner";
import LoginInputs from "../inputs/LoginInputs";
import { AccParent } from "./accpasswordStyles";

const AccPassword = () => {
  const [loading, setLoading] = useState(false);
  const [changePassDetails, setChangePassDetails] = useState({
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setChangePassDetails((values) => ({
      ...values,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (changePassDetails.password !== changePassDetails.confirmPassword) {
      setLoading(false);
      toast.error("Password and confirm password does not match");
      return;
    }
    const response = await makeApiCall(
      "/change/password",
      "PATCH",
      changePassDetails
    );
    if (response?.message === "password updated successfully") {
      toast.success(response?.message);
      setChangePassDetails({
        password: "",
        confirmPassword: "",
      });
      setLoading(false);
      return;
    }
    setLoading(false);
    if (response?.message !== "password updated successfully") {
      toast.error(response?.response?.data?.message);
      setChangePassDetails({
        password: "",
        confirmPassword: "",
      });
      return;
    }
  };

  return (
    <AccParent onSubmit={(e) => handleSubmit(e)} autoComplete="off">
      <h3>Change Password</h3>
      <LoginInputs
        type={`password`}
        label={`New password`}
        name={`password`}
        value={changePassDetails.password}
        onChange={handleChange}
      />
      <LoginInputs
        type={`password`}
        label={`Confirm new password`}
        name={`confirmPassword`}
        value={changePassDetails.confirmPassword}
        onChange={handleChange}
      />
      <button className="button" type="submit">
        {loading ? <Spinner color="#fff" /> : "Save"}
      </button>
    </AccParent>
  );
};

export default AccPassword;
