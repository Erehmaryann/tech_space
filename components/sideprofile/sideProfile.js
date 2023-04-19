/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { makeApiCall } from "../../lib/api";
import CateInputs from "../cateinputs/cateInputs";
import Modal from "../modal/Modal";
import { toast } from "react-hot-toast";
import Navlink from "../navlink/navlink";
import Spinner from "../common/spinner/spinner";
import { useUser } from "../../helper/get-user";
import { Button, Div } from "./sideProfileStyles";

const SideProfile = () => {
  const router = useRouter();
  const user = useUser();
  const path = router.pathname;
  const [showFirstModal, setShowFirstModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [getUserTopicNum, setGetUserTopicNum] = useState([]);
  const [totalNumOfMembers, setTotalNumOfMembers] = useState([]);
  const [totalNumOfTopics, setTotalNumOfTopics] = useState([]);
  const [getUserProfile, setGetUserProfile] = useState([]);
  const [membersStat, setMembersStat] = useState([]);
  const [topContributors, setTopContributors] = useState([]);

  useEffect(() => {
    // make a GET request to retrieve data from the API endpoint
    const fetchData = makeApiCall(`/getTopicCountsperuser/${user._id}`)
      .then((responseData) => {
        setGetUserTopicNum(responseData?.message);
        setLoading(false);
      })
      .catch((error) => {
        toast.error(error);
        setLoading(false);
      });

    fetchData;
    // make a GET request to retrieve totalmembers data from the API endpoint
    const fetchMembers = makeApiCall(`/totalmembers/`)
      .then((responseData) => {
        setTotalNumOfMembers(responseData?.message);
        setLoading(false);
      })
      .catch((error) => {
        toast.error(error);
        setLoading(false);
      });

    fetchMembers;
    // make a GET request to retrieve totaltopics data from the API endpoint
    const fetchTopic = makeApiCall(`totaltopic`)
      .then((responseData) => {
        setTotalNumOfTopics(responseData?.message);
        setLoading(false);
      })
      .catch((error) => {
        toast.error(error);
        setLoading(false);
      });

    fetchTopic;
    // make a GET request to retrieve userprofile data from the API endpoint
    const fetchProfile = makeApiCall(`/userprofile/${user._id}`)
      .then((responseData) => {
        setGetUserProfile(responseData?.message);
        setLoading(false);
      })
      .catch((error) => {
        toast.error(error);
        setLoading(false);
      });

    fetchProfile;

    const getTopContributors = makeApiCall(`/topContributors`)
      .then((responseData) => {
        setTopContributors(responseData?.message);
        setLoading(false);
      })
      .catch((error) => {
        toast.error(error);
        setLoading(false);
      });

    getTopContributors;

    const getMembersStatus = makeApiCall(`/stats/users`)
      .then((responseData) => {
        setMembersStat(responseData?.message);
        setLoading(false);
      })
      .catch((error) => {
        toast.error(error);
        setLoading(false);
      });

    getMembersStatus;
  }, [user?._id]);

  const trueStatusLength = membersStat.filter(
    (member) => member.status === true
  ).length;

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
                  <img
                    src="/assets/svg/plusIcon.svg"
                    width={"10"}
                    height={"10"}
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
                  {loading ? (
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Spinner color="#409de0" />
                    </div>
                  ) : (
                    <>
                      <img
                        src={
                          getUserProfile.profileimg
                            ? getUserProfile?.profileimg
                            : "/assets/svg/sideDp.svg"
                        }
                        width={"158px"}
                        height={"154px"}
                        alt="side-profile-pix"
                        className="rev"
                      />
                      <h4>{getUserProfile?.fullname}</h4>
                      <span>{`${getUserTopicNum} topics`}</span>
                    </>
                  )}
                </div>
                <div className="contributors">
                  <h2>Top Contributors</h2>
                  {loading ? (
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        height: "200px",
                      }}
                    >
                      <Spinner color="#409de0" />
                    </div>
                  ) : (
                    <>
                      {topContributors.map((data) => (
                        <Navlink
                          key={data?._id}
                          variant="div"
                          img={data?.profileimg}
                          name={data?.name}
                        />
                      ))}
                    </>
                  )}
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
                  {loading ? <Spinner color="#fff" /> : totalNumOfMembers ?? ""}
                </h1>
                <h4>Number of Members</h4>
              </div>
              <div className="num-of-mem">
                <h1
                  style={{
                    background: "lightgrey",
                  }}
                >
                  {loading ? <Spinner color="#fff" /> : totalNumOfTopics ?? ""}
                </h1>
                <h4>Total Posts</h4>
              </div>
              <div className="num-of-mem">
                <h1
                  style={{
                    background: "#56C568",
                  }}
                >
                  {loading ? <Spinner color="#fff" /> : trueStatusLength ?? ""}
                </h1>
                <h4>Active Members Count</h4>
              </div>
            </>
          )}
        </Div>
      )}
    </>
  );
};

export default SideProfile;
