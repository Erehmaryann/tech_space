import styled from "styled-components";
import devices from "../utils/Devices";

export const StyledModalBody = styled.div`
  padding-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledModalTitle = styled.h4`
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  line-height: 45px;
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
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
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
  justify-content: center;
  align-items: center;
  width: 464px;
  height: 294px;
  border-radius: 15px;
  padding: 15px;

  p {
    width: 199px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 300;
    font-size: 17px;
    line-height: 25px;
    text-align: center;
    color: #374956;
  }

  @media${devices.mobile} {
    width: 80%;
  }
`;
export const StyledModalOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2000;
`;
