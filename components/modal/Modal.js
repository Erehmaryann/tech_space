import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import {
  StyledModal,
  StyledModalBody,
  StyledModalButton,
  StyledModalHeader,
  StyledModalOverlay,
  StyledModalTitle,
} from "./ModalStyles";

import Image from "next/image";

const Modal = ({ show, onClose, children, title, btnText, headerText, btn }) => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const handleCloseClick = (e) => {
    e.preventDefault();
    onClose();
  };

  const modalContent = show ? (
    <StyledModalOverlay>
      <StyledModal>
        <div className="close-icon" onClick={handleCloseClick}>
          <Image src="/assets/svg/closeIcon.svg" alt="close-icon" width={40} height={40} />
        </div>
        {headerText && <StyledModalHeader>{headerText}</StyledModalHeader>}

        {title && <StyledModalTitle>{title}</StyledModalTitle>}
        <StyledModalBody>
          <div>{children}</div>
          {btn && (
            <a href="#" onClick={handleCloseClick}>
              <StyledModalButton>{btnText}</StyledModalButton>
            </a>
          )}
        </StyledModalBody>
      </StyledModal>
    </StyledModalOverlay>
  ) : null;

  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById("modal-root")
    );
  } else {
    return null;
  }
};

export default Modal;
