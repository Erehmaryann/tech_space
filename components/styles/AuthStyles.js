import styled from "styled-components";
import device from "../utils/Devices";
export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  background: #fff;
  align-items: center;
  align-self: center;
`;
export const Main = styled.main`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  @media ${device.tablet} {
    width: 90%;
  } ;
`;
export const ImageDiv = styled.div`
  width: 50%;
  @media ${device.mobile} {
    display: none;
  } ;
`;

export const Form = styled.div`
  width: 35.4%;
  display: flex;
  flex-direction: column;
  a {
    text-decoration: none;
  }
  p {
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 22px;
    color: #c4c4c4;
  }
  h4 {
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    line-height: 45px;
    color: #3f3d55;
    width: 100%;
    margin-bottom: 10px;
  }

  .tech-space__forgot-password-small-text {
    text-decoration: none;
    display: flex;
    align-self: flex-end;
    margin-bottom: 50px;
    font-style: normal;
    font-weight: 600;
    font-size: 10px;
    line-height: 15px;
    color: #c4c4c4;
  }

  @media ${device.tablet} {
    width: 40%;
  }
  @media ${device.mobile} {
    width: 100%;
    align-self: flex-start;
  } ;
`;

export const SmallDiv = styled.div`
  display: flex;
  width: 100%;
  /* height: 15px; */
  align-items: center;
  justify-content: space-between;
  padding-bottom: 40px;
  div,
  a {
    text-decoration: none;
    display: flex;
    justify-content: space-between;
    width: 100%;
    font-style: normal;
    font-weight: normal;
    font-size: 10px;
    color: #c4c4c4;

    :nth-child(2) {
      display: flex;
      justify-content: flex-end;
    }
  }
`;

export const NoAcc = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  a {
    text-decoration: none;
    font-style: normal;
    font-weight: normal;
    font-size: 10px;
    color: #c4c4c4;
  }
`;
