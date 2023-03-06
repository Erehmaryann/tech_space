import React, { useState, useEffect } from "react";
import { useUser } from "../../helper/get-user";
import Moment from "react-moment";
import Image from "next/image";
import ProfileHome from "../profilehome/profilehome";
import { makeApiCall } from "../../lib/api";
import { ProfileDiv, HomeDiv, ProfileItemContainer } from "./profileStyles";
import MyTopic from "../mytopic/mytopic";
import Spinner from "../common/spinner/spinner";
import { toast } from "react-hot-toast";

const ProfilePage = () => {
  const [show, setShow] = useState("home");
  const [loading, setLoading] = useState(false);
  const user = useUser();
  const [getUser, setGetUser] = useState([]);

  useEffect(() => {
    // make a GET request to retrieve data from the API endpoint
    makeApiCall(`/userprofile/${user._id}`)
      .then((responseData) => {
        setLoading(true);
        setGetUser(responseData?.message);
        setLoading(false);
      })
      .catch((error) => {
        toast.error(error);
        setLoading(false);
      });
  }, [user._id]);

  return (
    <ProfileDiv>
      {loading ? (
        <ProfileItemContainer>
          <Spinner />
        </ProfileItemContainer>
      ) : (
        <ProfileItemContainer>
          <Image
            src="/assets/svg/dpavatar.svg"
            alt="profile-pix"
            width={100}
            height={100}
          />
          <h4>{getUser?.fullname}</h4>
          <p>Hi, I am a frontend developer.</p>
          <small>
            Joined{" "}
            <Moment format="D MMM YYYY" withTitle>
              {getUser?.date}
            </Moment>
          </small>
          <HomeDiv>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "150px",
              }}
            >
              <h5
                className={show === "home" ? "border-bottom" : ""}
                onClick={() => setShow("home")}
              >
                Home
              </h5>
              <h5
                className={show === "topic" ? "border-bottom" : ""}
                onClick={() => setShow("topic")}
              >
                My Topics
              </h5>
            </div>
            <div>
              {show === "home" ? <ProfileHome data={getUser} /> : <MyTopic />}
            </div>
          </HomeDiv>
        </ProfileItemContainer>
      )}
    </ProfileDiv>
  );
};

export default ProfilePage;
