import styled from "styled-components";

export const FormDiv = styled.div`
  margin-top: 1.8rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  .comment-form-textarea {
    width: 382px;
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
