/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { FormDiv } from "./commentFormStyles";

const CommentForm = ({
  handleSubmit,
  topicId,
  commentUserto,
  hasCancelButton = false,
  initialText = "",
  handleCancel,
  submitLabel,
}) => {
  const [text, setText] = useState(initialText);
  const isTextareaDisabled = text.length === 0;

  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit(text, topicId, commentUserto);
    console.log(topicId);
    console.log(commentUserto, "I love you");

    setText("");
  };

  const onPress = (e) => {
    e.preventDefault;
    if (e.key === "Enter" && !isTextareaDisabled) {
      onSubmit(e);
    }
  };

  return (
    <FormDiv>
      <form onKeyPress={onPress} onSubmit={onSubmit}>
        <img
          src="/assets/svg/profilepix.svg"
          width={28}
          height={28}
          alt="user-image"
          style={{ borderRadius: "50%" }}
        />
        <textarea
          className="comment-form-textarea"
          placeholder="Add comment"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button
          className="comment-form-button"
          type="submit"
          disabled={isTextareaDisabled}
        >
          {submitLabel}
        </button>
        {hasCancelButton && (
          <button
            className="comment-form-button comment-form-cancel-button"
            type="button"
            onClick={handleCancel}
          >
            X
          </button>
        )}
      </form>
    </FormDiv>
  );
};

export default CommentForm;
