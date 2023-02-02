import styled from "styled-components";

export const ProfileDiv = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
  background: #ececec;
`;

export const ProfileItemContainer = styled.section`
  margin: 20px 0 0 0;
  padding: 20px;
  width: 750px;
  height: 1000px;
  display: flex;

  .acc-drop {
    position: absolute;
    width: 506px;
    height: 370px;
    left: 580px;
    top: 131px;
    background: #ffffff;
    border: 1px solid #f6f6f6;
    border-radius: 10px;
    color: #374956;
  }

  .acc-par {
    position: absolute;
    width: 190px;
    height: 186px;
    left: 360px;
    top: 133px;
    background: #ffffff;
    border: 1px solid #f6f6f6;
    color: #374956;
    border-radius: 5px;
    padding: 5px 20px;

    h3 {
      font-size: 17px;
      margin-bottom: 5px;
    }

    p {
      padding: 8px 0;
      font-size: 14px;
      cursor: pointer;
    }
    .background {
      background: #abcee7;
    }
  }
`;
