import React, { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { conData, activeMem } from "./data";
import CateInputs from "../cateinputs/cateInputs";
import Modal from "../modal/Modal";
import Navlink from "../navlink/navlink";
import { Button, Div } from "./sideProfileStyles";

const SideProfile = () => {
  const router = useRouter();
  const path = router.pathname;
  const [showFirstModal, setShowFirstModal] = useState(false);

  const showModalHandler = () => {
    setShowFirstModal(true);
  };

  return (
    <>
      {path !== "/reports" && (
        <Div>
          {path !== "/requests" &&
            path !== "/topics" &&
            path !== "/members" && (
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
                    height={150}
                    alt="side-profile-pix"
                  />
                  <h4>Ereh Maryann</h4>
                  <span>22 topics</span>
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
          {(path === "/requests" ||
            path === "/topics" ||
            path === "/members") && (
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
