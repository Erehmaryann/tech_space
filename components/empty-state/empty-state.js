import { useState, } from 'react';
import { Div, Button } from './emptyStateStyles';
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

export default EmptyState;