import styled from "styled-components";

export const Button = styled.button`
  background-color: #409de0;
  cursor: pointer;
  width: 200px;
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

export const Div = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 90vh;
  width: 25%;
  position: -webkit-sticky;
  position: sticky;
  overflow-y: scroll;
  top: 5rem;

  .profile-pix {
    margin-top: 4rem;
    padding-bottom: 3rem;
    border-bottom: 3px solid #f6f6f6;
    h4 {
      margin-bottom: 2px;
      color: #374956;
    }
    span {
      color: #c4c4c4;
    }
    .rev {
      object-fit: cover;
      border-radius: 21px;
    }
  }
  .contributors {
    padding-top: 3rem;
    h2 {
      color: #374956;
      font-size: 20px;
    }
  }
  .num-of-mem {
    margin-top: 85px;
    display: flex:
    flex-direction: column;
    justify-content: center;
    h1 {
      width: 98px;
      height: 98px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: "Poppins";
      font-style: normal;
      font-weight: 600;
      font-size: 27px;
      border-radius: 50%;
      color: #ffffff;
    }
    h4 {
      font-family: "Poppins";
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      color: #c4c4c4;
    }
  }
`;
