import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { makeApiCall } from "../../lib/api";
import Image from "next/image";
import { conData } from "./data";
import CateInputs from "../cateinputs/cateInputs";
import Modal from "../modal/Modal";
import { toast } from "react-hot-toast";
import Navlink from "../navlink/navlink";
import { useUser } from "../../helper/get-user";
import { Button, Div } from "./sideProfileStyles";

const SideProfile = () => {
  const router = useRouter();
  const user = useUser();
  const path = router.pathname;
  const [showFirstModal, setShowFirstModal] = useState(false);
  const [getUserTopicNum, setGetUserTopicNum] = useState([]);
  const [totalNumOfMembers, setTotalNumOfMembers] = useState([]);
  const [totalNumOfTopics, setTotalNumOfTopics] = useState([]);
  const [getUserProfile, setGetUserProfile] = useState([]);

  useEffect(() => {
    // make a GET request to retrieve data from the API endpoint
    const fetchData = makeApiCall(`/getTopicCountsperuser/${user._id}`)
      .then((responseData) => {
        setGetUserTopicNum(responseData?.message);
      })
      .catch((error) => {
        toast.error(error);
      });

    fetchData;
    // make a GET request to retrieve totalmembers data from the API endpoint
    const fetchMembers = makeApiCall(`/totalmembers/`)
      .then((responseData) => {
        setTotalNumOfMembers(responseData?.message);
      })
      .catch((error) => {
        toast.error(error);
      });

    fetchMembers;
    // make a GET request to retrieve totaltopics data from the API endpoint
    const fetchTopic = makeApiCall(`totaltopic`)
      .then((responseData) => {
        setTotalNumOfTopics(responseData?.message);
      })
      .catch((error) => {
        toast.error(error);
      });

    fetchTopic;
    // make a GET request to retrieve userprofile data from the API endpoint
    const fetchProfile = makeApiCall(`/userprofile/${user._id}`)
      .then((responseData) => {
        setGetUserProfile(responseData?.message);
      })
      .catch((error) => {
        toast.error(error);
      });

    fetchProfile;
  }, [user?._id]);

  const showModalHandler = () => {
    setShowFirstModal(true);
  };

  return (
    <>
      {path !== "/dashboard/reports" && (
        <Div>
          {path !== "/dashboard/requests" &&
            path !== "/dashboard/topics" &&
            path !== "/dashboard/members" && (
              <div
                style={{
                  padding: "3rem 0rem",
                }}
              >
                <Button onClick={() => showModalHandler()}>
                  Add a new topic &nbsp;
                  <Image
                    src="/assets/svg/plusIcon.svg"
                    width={10}
                    height={10}
                    alt="addIcon"
                  />
                </Button>
                <Modal
                  onClose={() => setShowFirstModal(false)}
                  show={showFirstModal}
                  title={`New Topic`}
                >
                  <CateInputs setShowFirstModal={setShowFirstModal} />
                </Modal>
                <div className="profile-pix">
                  <Image
                    src={
                      getUserProfile.profileimg
                        ? getUserProfile?.profileimg
                        : "/assets/svg/sideDp.svg"
                    }
                    width={158}
                    height={154}
                    alt="side-profile-pix"
                    className="rev"
                  />
                  <h4>{getUserProfile?.fullname}</h4>
                  <span>{`${getUserTopicNum} topics`}</span>
                </div>
                <div className="contributors">
                  <h2>Top Contributors</h2>
                  {conData.map((data, index) => (
                    <Navlink
                      key={index}
                      variant="div"
                      img={data.img}
                      name={data.name}
                    />
                  ))}
                </div>
              </div>
            )}
          {(path === "/dashboard/requests" ||
            path === "/dashboard/topics" ||
            path === "/dashboard/members") && (
            <>
              <div className="num-of-mem">
                <h1
                  style={{
                    background: "#409de0",
                  }}
                >
                  {totalNumOfMembers ?? ""}
                </h1>
                <h4>Number of Members</h4>
              </div>
              <div className="num-of-mem">
                <h1
                  style={{
                    background: "#56C568",
                  }}
                >
                  {totalNumOfTopics ?? ""}
                </h1>
                <h4>Total Posts</h4>
              </div>
              <div className="num-of-mem">
                <h1
                  style={{
                    background: "#EB5757",
                  }}
                >
                  {3}
                </h1>
                <h4>Members offline</h4>
              </div>
            </>
          )}
        </Div>
      )}
    </>
  );
};

export default SideProfile;
