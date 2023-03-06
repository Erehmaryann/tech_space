import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { makeApiCall } from "../../lib/api";
import Image from "next/image";
import { conData, activeMem } from "./data";
import CateInputs from "../cateinputs/cateInputs";
import Modal from "../modal/Modal";
import { toast } from "react-hot-toast";
import Navlink from "../navlink/navlink";
import { useUser } from "../../helper/get-user";
import { Button, Div } from "./sideProfileStyles";

const SideProfile = () => {
  const router = useRouter();
  const path = router.pathname;
  const [showFirstModal, setShowFirstModal] = useState(false);
  const user = useUser();
  const [getUserTopicNum, setGetUserTopicNum] = useState([]);

  useEffect(() => {
    // make a GET request to retrieve data from the API endpoint
    makeApiCall(`/getTopicCountsperuser/${user._id}`)
      .then((responseData) => {
        setGetUserTopicNum(responseData?.message);
      })
      .catch((error) => {
        toast.error(error);
      });
  }, [user._id]);

  console.log(user, "arabbbbbb");

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
                    src="/assets/svg/sideDp.svg"
                    width={158}
                    height={154}
                    alt="side-profile-pix"
                    className="rev"
                  />
                  <h4>
                    {/* {user.fullname !== null ? user?.fullname : "Ereh Maryann"} */}
                    Ereh, Maryann Edward
                  </h4>
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
              {activeMem.map((item, idx) => (
                <div className="num-of-mem" key={idx}>
                  <h1
                    style={{
                      background: item.bg,
                    }}
                  >
                    {item.num}
                  </h1>
                  <h4>{item.text}</h4>
                </div>
              ))}
            </>
          )}
        </Div>
      )}
    </>
  );
};

export default SideProfile;
