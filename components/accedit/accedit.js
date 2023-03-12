import { useState } from "react";
import { toast } from "react-hot-toast";
import { makeApiCall } from "../../lib/api";
import Spinner from "../common/spinner/spinner";
import LoginInputs from "../inputs/LoginInputs";
import { AccParent } from "./acceditStyles";
// import Image from "next/image";

const AccEdit = () => {
  const [loading, setLoading] = useState(false);
  const [editProfileDetails, setEditProfileDetails] = useState({
    path: "",
    fullname: "",
    email: "",
    phone: "",
    bio: "",
    username: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setEditProfileDetails((values) => ({
      ...values,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const response = await makeApiCall(
      "/user/settings",
      "PATCH",
      editProfileDetails
    );
    if (response?.message === "updated successfully") {
      toast.success(response?.message);
      setEditProfileDetails({
        path: "",
        fullname: "",
        email: "",
        phone: "",
        bio: "",
        username: "",
      });
      setLoading(false);
      return;
    }
    setLoading(false);
    if (response?.message !== "updated successfully") {
      toast.error(response?.message);
      setEditProfileDetails({
        path: "",
        fullname: "",
        email: "",
        phone: "",
        bio: "",
        username: "",
      });
      return;
    }
  };

  return (
    <AccParent onSubmit={(e) => handleSubmit(e)} autoComplete="off">
      <h3>Edit Profile</h3>

      {/* <div className="img">
        <label
          htmlFor="file-upload"
          className="file-upload"
          style={{ cursor: "pointer" }}
        >
          {images.length < 1 ? (
            <>
              <Image
                src="/assets/svg/dpavatar.svg"
                alt="profile-pix"
                width={80}
                height={80}
              />
              <input
                type="file"
                name="file-upload"
                id="file-upload"
                accept="image/*"
                onChange={onImageChange}
                style={{ display: "none" }}
              />
            </>
          ) : (
            imageURLs.map((imageSrc, idx) => (
              <Image
                className="rev"
                key={idx}
                width={80}
                height={80}
                src={imageSrc}
                alt="profile-image"
                style={{ borderRadius: "50%", objectFit: "cover" }}
              />
            ))
          )}
        </label>
        <h3>Edit Picture</h3>
      </div> */}
      <LoginInputs
        type="url"
        placeholder={"Profile Image Url"}
        label={"Edit Profile Picture"}
        name={"path"}
        value={editProfileDetails.path}
        onChange={handleChange}
      />
      <LoginInputs
        type={`text`}
        placeholder={`Full Name`}
        label={`Full name`}
        name={`fullname`}
        value={editProfileDetails.fullname}
        onChange={handleChange}
      />
      <LoginInputs
        type={`text`}
        placeholder={`Username`}
        label={`Username`}
        name={`username`}
        value={editProfileDetails.username}
        onChange={handleChange}
      />
      <LoginInputs
        type={`email`}
        placeholder={`Email address`}
        label={`Email address`}
        name={`email`}
        value={editProfileDetails.email}
        onChange={handleChange}
      />
      <LoginInputs
        type={`text`}
        placeholder={`+2348125671212`}
        label={`Phone number`}
        name={`phone`}
        value={editProfileDetails.phone}
        onChange={handleChange}
      />
      <div className="input-group">
        <label htmlFor="topic-description">
          In one sentence, tell us about yourself
        </label>
        <textarea
          name="bio"
          id="topic-description"
          placeholder="Enter a description"
          style={{ resize: "none" }}
          value={editProfileDetails.bio}
          onChange={handleChange}
        />
      </div>
      <button className="button" type="submit">
        {loading ? <Spinner color="#fff" /> : "Save"}
      </button>
    </AccParent>
  );
};

export default AccEdit;
