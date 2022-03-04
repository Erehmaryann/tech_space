import { useState, } from 'react';
import styled from 'styled-components';
import Image from "next/image";

import CateInputs from '../cateinputs/cateInputs';
import Modal from "../modal/Modal";

const EmptyState = ({ text, para, btn }) => {
    const [showModal, setShowModal] = useState(false);

    const showModalHandler = () => {
        setShowModal(true);
    };

    return (
        <Div>
            <h4>{text}</h4>
            <small>{para}</small>
            {
                btn && (
                    <>
                        <Button onClick={() => showModalHandler()}>
                            Add topic
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
                    </>
                )
            }
        </Div>
    );
};

const Div = styled.div`
    display: flex; 
    align-items: center;
    justify-content: center; 
    flex-direction: column;
    width: 700px;
    height: 500px;
    background-color: #F5F5F5;
    margin: 16px 0;
    padding: 20px;
    box-sizing: border-box;
    border-radius: 10px;

    h5 {
        color: #374956;
        padding: 10px;
    }

    small {
        padding: 10px;
        color: #C4C4C4;
    } 
`;

const Button = styled.button`
  background-color: #409de0;
  cursor: pointer;
  width: 130px;
  margin-top: 10px;
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

export default EmptyState;