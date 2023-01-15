import { useState } from "react";
import AccSettings from "../accsettings/accsettings";
import AccPassword from "../accpassword/accpassword";
import AccEdit from "../accedit/accedit";
import { ProfileDiv, ProfileItemContainer } from "./settingStyles";

const SettingsPage = () => {
  const [show, setShow] = useState("account");

  return (
    <ProfileDiv>
      <ProfileItemContainer>
        <div className="acc-par">
          <h3>Account Settings</h3>
          <div className="">
            <p
              className={show === "account" ? "background" : ""}
              onClick={() => setShow("account")}
            >
              Account
            </p>
            <p
              className={show === "password" ? "background" : ""}
              onClick={() => setShow("password")}
            >
              Password
            </p>
            <p
              className={show === "edit" ? "background" : ""}
              onClick={() => setShow("edit")}
            >
              Edit profile
            </p>
          </div>
        </div>
        <div className="acc-drop">
          {show === "account" ? (
            <AccSettings />
          ) : show === "password" ? (
            <AccPassword />
          ) : (
            <AccEdit />
          )}
        </div>
      </ProfileItemContainer>
    </ProfileDiv>
  );
};

export default SettingsPage;
