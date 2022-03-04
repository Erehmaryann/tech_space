import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import {
  StyledModal,
  StyledModalBody,
  StyledModalButton,
  StyledModalHeader,
  StyledModalOverlay,
  StyledModalTitle,
  StyledModalWrapper,
} from "./ModalStyles";

import Image from "next/image";

const Modal = ({ show, onClose, children, title, btnText, headerText, btn }) => {
  const [isBrowser, setIsBrowser] = useState(false);

  // create ref for the StyledModalWrapper component
  const modalWrapperRef = React.useRef();

  // check if the user has clickedinside or outside the modal
  const backDropHandler = (e) => {
    if (!modalWrapperRef?.current?.contains(e.target)) {
      onClose();
    }
  };

  useEffect(() => {
    setIsBrowser(true);

    // attach event listener to the whole windor with our handler
    window.addEventListener("click", backDropHandler);

    // remove the event listener when the modal is closed
    return () => window.removeEventListener("click", backDropHandler);
  }, []);

  React.useLayoutEffect(() => {
    console.log("here");
  }, []);

  const handleCloseClick = (e) => {
    e.preventDefault();
    onClose();
  };

  const modalContent = show ? (
    <StyledModalOverlay>
<<<<<<< HEAD
      <StyledModalWrapper ref={modalWrapperRef}>
        <StyledModal>
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
      </StyledModalWrapper>
=======
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
>>>>>>> f1ae1b0334bd7d04ab0793f5617e055b1d7ae6c6
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
