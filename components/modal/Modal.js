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

const Modal = ({
  show,
  onClose,
  children,
  title,
  btnText,
  headerText,
  btn,
}) => {
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

  // useEffect(() => {
  //   document.addEventListener('click', (e) => {
  //     if (e.target.id === 'modal-root') {
  //       setShowModal(false);
  //     }
  //   });
  // }, []);

  const handleCloseClick = (e) => {
    e.preventDefault();
    onClose();
  };

  const modalContent = show ? (
    <StyledModalOverlay>
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
