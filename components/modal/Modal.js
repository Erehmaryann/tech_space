import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import {
  StyledModal,
  StyledModalBody,
  StyledModalButton,
  StyledModalHeader,
  StyledModalOverlay,
  StyledModalTitle,
} from "./ModalStyles";

const Modal = ({ show, onClose, children, title, btnText, headerText }) => {
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
        {headerText && <StyledModalHeader>{headerText}</StyledModalHeader>}

        {title && <StyledModalTitle>{title}</StyledModalTitle>}
        <StyledModalBody>
          <p>{children}</p>
          <a href="#" onClick={handleCloseClick}>
            <StyledModalButton>{btnText}</StyledModalButton>
          </a>
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