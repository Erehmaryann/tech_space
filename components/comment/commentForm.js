/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { FormDiv } from "./commentStyles";
import { makeApiCall } from "../../lib/api";

// import { topicID} from 'id'

const CommentForm = ({
  postOwnerImg,
  // handleSubmit,
  // hasCancelButton = false,
  initialText = "",
  // handleCancel,
}) => {
  const [createComDetails, setCreateComDetails] = useState({
    comment_userto: "",
    text: initialText,
    // topicID,
    type: "",
    comment_id: "",
  });
  const isTextareaDisabled = createComDetails?.text.length === 0;

  const onSubmit = async (e) => {
    e.preventDefault();
    const response = await makeApiCall(
      "/createComment",
      "PATCH",
      createComDetails
    );
    setCreateComDetails((prev) => ({ ...prev, text: "" }));
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
          src={postOwnerImg ? postOwnerImg : "/assets/svg/profilepix.svg"}
          width={"28px"}
          height={"28px"}
          alt="user-image"
          style={{ borderRadius: "50%" }}
        />
        <textarea
          className="comment-form-textarea"
          name="text"
          placeholder="Add comment"
          value={createComDetails?.text}
          onChange={(e) =>
            setCreateComDetails((prev) => ({ ...prev, text: e.value }))
          }
        />
        <button
          className="comment-form-button"
          type="submit"
          disabled={isTextareaDisabled}
        >
          +
        </button>
        {/* {hasCancelButton && (
          <button
            className="comment-form-button comment-form-cancel-button"
            type="button"
            onClick={handleCancel}
          >
            X
          </button>
        )} */}
      </form>
    </FormDiv>
  );
};

export default CommentForm;
