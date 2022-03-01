import { useState, } from 'react';
import styled from "styled-components";
import Image from "next/image";

import CateInputs from '../cateinputs/cateInputs';
import Modal from "../modal/Modal";

const SideProfile = () => {
    const [showModal, setShowModal] = useState(false);

    const showModalHandler = () => {
        setShowModal(true);
    };

    return (
        <>
            <Div>
                <Button onClick={() => showModalHandler()}>
                    Add a new topic
                    &nbsp;
                    <Image src="/assets/svg/plusIcon.svg" width={10} height={10} alt="addIcon" />
                </Button>
            </Div>
            <Modal
                // onClose={() => setShowModal(false)}
                show={showModal}
                // btnText={`ok`}
                title={`New Topic`}
            >
                <CateInputs />
            </Modal>
        </>
    );
};

const Div = styled.div`
  padding: 3rem;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Button = styled.button`
  background: #409de0;
  cursor: pointer;
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px;
  box-shadow: 0px 5px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  border: none;
  // typography
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  color: #ebebeb;
  text-decoration: none;
`;

export default SideProfile;