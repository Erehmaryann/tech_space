import { useState, } from 'react';
import styled from "styled-components";
import Image from "next/image";

import CateInputs from '../cateinputs/cateInputs';
import Modal from "../modal/Modal";
import Navlink from '../navlink/navlink';

const conData = [
    {
        name: "Ereh Maryann",
        img: "/assets/svg/profilepix.svg",
    },
    {
        name: "Costly A.",
        img: "/assets/svg/profilepix.svg",
    },
    {
        name: "Takon Ajie",
        img: "/assets/svg/profilepix.svg",
    },
    {
        name: "Victor Okafor",
        img: "/assets/svg/profilepix.svg",
    },
    {
        name: "Takon Ajie",
        img: "/assets/svg/profilepix.svg",
    },
];

const SideProfile = () => {
    const [showModal, setShowModal] = useState(false);

    const showModalHandler = () => {
        setShowModal(true);
    };

    return (
        <Div>
            <Button onClick={() => showModalHandler()}>
                Add a new topic
                &nbsp;
                <Image src="/assets/svg/plusIcon.svg" width={10} height={10} alt="addIcon" />
            </Button>
            <Modal
                // onClose={() => setShowModal(false)}
                show={showModal}
                // btnText={`ok`}
                title={`New Topic`}
            >
                <CateInputs />
            </Modal>
            <div className="profile-pix">
                <Image src="/assets/svg/sideDp.svg" width={158} height={150} alt="side-profile-pix" />
                <h4>Ereh Maryann</h4>
                <span>22 topics</span>
            </div>
            <div className="contributors">
                <h2>Top Contributors</h2>
                {
                    conData.map((data, index) => (
                        <Navlink
                            key={index}
                            variant="div"
                            img={data.img}
                            name={data.name}
                        />
                    ))
                }
            </div>
        </Div>
    );
};

const Button = styled.button`
  background-color: #409de0;
  cursor: pointer;
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px;
  box-shadow: 0px 5px 8px rgba(64, 157, 224, 0.15);
  border-radius: 10px;
  border: none;
  outline: none;
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  color: #ebebeb;
`;

const Div = styled.div`
  padding: 3rem 0rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 90vh;
  width: 25%;
  position: -webkit-sticky;
  position: sticky;
  overflow-y: scroll;
  top: 5rem;

  .profile-pix {
    margin-top: 4rem;
    padding-bottom: 3rem;
    border-bottom: 3px solid #F6F6F6;
;

    h4 {
    margin-bottom: 2px;
    color: #374956;

    }
    span {
    color: #C4C4C4;
    }
  }
  .contributors {
      padding-top: 3rem;
    h2 {
        color: #374956;
        font-size: 20px;
    }
  }
`;

export default SideProfile;