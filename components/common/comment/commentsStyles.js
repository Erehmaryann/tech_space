import styled from "styled-components";

export const CommentDiv = styled.div`
  background: rgb(255, 255, 255);
  width: inherit;
  height: 100vh;
  box-shadow: 0px 4px 4px rgba(55, 73, 86, 0.07);
  display: flex;
  overflow-y: scroll;
  margin-bottom: 20px;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  position: relative;

  .comments-container {
    margin: 20px 0;
  }

  .comment_load-more {
    cursor: pointer;

    p {
      position: absolute;
      right: 18px;
      font-size: 12px;
      color: #409de0;
      font-weight: 600;
      bottom: 20px;

      :hover {
        color: #a2a2a2;
      }
    }
  }
`;
