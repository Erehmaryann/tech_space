import styled from "styled-components";

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
      min-width: 373px;
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

  .reply-action {
    margin-right: 8px;
    font-size: 11px;
    color: #0095f6;
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
    /* display: none; */
  }
`;
