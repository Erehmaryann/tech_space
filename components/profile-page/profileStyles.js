import styled from "styled-components";

export const ProfileDiv = styled.div`
  width: 100%;
  height: 100vh;
  padding: 20px;
  background: #ececec;
  overflow-y: scroll;
`;

export const ProfileItemContainer = styled.section`
  margin: 20px 0 0 0;
  padding: 20px;
  width: 750px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .rev {
    border-radius: 50%;
    object-fit: cover;
  }

  h4 {
    color: #409de0;
  }

  p {
    color: #374956;
    padding: 4px 0;
  }
  small {
    color: #c4c4c4;
  }
  h5 {
    cursor: pointer;
    color: #c4c4c4;
    text-align: center;
  }
`;

export const HomeDiv = styled.div`
  padding-top: 2rem;

  .border-bottom {
    border-bottom: 1px solid #409de0;
  }
`;
