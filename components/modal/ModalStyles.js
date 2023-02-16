import styled from "styled-components";
import devices from "../utils/Devices";

export const StyledModalWrapper = styled.div`
  width: 500px;
  height: 600px;
`;

export const StyledModalBody = styled.div`
  /* padding-top: 60px; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* overflow-y: auto; */
  /* height: 200px; */
`;

export const StyledModalTitle = styled.h4`
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  /* line-height: 45px; */
  /* identical to box height */

  color: #3f3d55;
`;

export const StyledModalButton = styled.button`
  width: 64px;
  height: 32px;
  background: #409de0;
  box-shadow: 0px 5px 8px rgba(64, 157, 224, 0.15);
  border-radius: 15px;
  border: none;
  // typography
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  margin-top: 20px;
  margin-bottom: 50px;
  cursor: pointer;
  color: #ffffff;
`;

export const StyledModalHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 25px;
`;

export const StyledModal = styled.div`
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 464px;
  height: 430px;
  border-radius: 15px;
  padding: 15px;
  position: relative;

  .close-icon {
    position: absolute;
    right: 12px;
    top: 10px;
    cursor: pointer;
  }

  div {
    /* width: 199px; */

    font-style: normal;
    font-weight: 300;
    font-size: 17px;
    /* line-height: 25px; */
    /* text-align: center; */
    color: #374956;
  }

  @media${devices.mobile} {
    width: 80%;
  }
`;
export const StyledModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2000;
  overflow-y: hidden !important;
`;
