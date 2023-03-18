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

export const Div = styled.div`
  display: flex;
  margin-bottom: 10px;

  .comment-image-container {
    margin-right: 1.2rem;
  }

  .comment-right-part {
    width: 100%;
    .grey-bg {
      background: #f1f1f1;
      padding: 1rem 0 1rem 1rem;
      min-width: 382px;
      box-sizing: border-box;
      border-radius: 0px 10px 10px 10px;
    }
  }

  .comment-content {
    display: flex;
    color: #c4c4c4;
    font-size: 9px;
    align-items: center;
    padding-bottom: 0.5rem;

    .time {
      &::before {
        content: "•";
        padding-left: 1rem;
        padding-right: 0.2rem;
        font-weight: bold;
      }
    }
  }

  .comment-author {
    font-size: 12px;
    font-weight: 600;
    color: #374956;
  }

  .comment-text {
    font-size: 10px;
    color: #374956;
  }

  .comment-actions {
    display: flex;
    cursor: pointer;
    margin-top: 8px;
  }

  .comment-action {
    margin-right: 8px;
    font-size: 11px;
    color: #a2a2a2;
    font-weight: 400;
    &::before {
      content: "•";
      padding-right: 0.2rem;
    }
  }

  .comment-action:hover {
    color: #409de0;
  }

  .replies {
    margin-top: 20px;
  }
`;

export const FormDiv = styled.div`
  margin-top: 1.8rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  .comment-form-textarea {
    min-width: 382px;
    height: 37px;
    background: #f1f1f1;
    border: 1px solid #ffffff;
    box-sizing: border-box;
    border-radius: 7px;
    outline: none;
    resize: none;
    position: relative;
    margin-left: 1.1rem;
    margin-right: 1.1rem;
    margin-bottom: -0.4rem;

    &::placeholder {
      color: #374956;
      font-weight: 400;
      font-size: 10px;
      padding-top: 0.5rem;
      padding-left: 0.5rem;
    }
  }

  .comment-form-button {
    font-size: 16px;
    padding: 2px;
    border: none;
    cursor: pointer;
    outline: none;
    border-radius: 8px;
    color: grey;
  }

  .comment-form-button:hover:enabled {
    cursor: pointer;
    background: #a2a2a2;
  }

  .comment-form-button:disabled {
    opacity: 0.7;
    cursor: default;
  }

  .comment-form-cancel-button {
    margin-left: -35px;
    margin-top: 0.4rem;
    font-size: 11px;
    position: absolute;
  }
`;
