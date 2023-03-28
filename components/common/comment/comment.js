/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { Div } from "./commentStyles";
import CommentForm from "./commentForm";
import { toast } from "react-hot-toast";
// import { updateComment } from "./api";

import Moment from "react-moment";
import { makeApiCall } from "../../../lib/api";

const Comment = ({
  comment,
  replies,
  topicId,
  commentUserto,
  // updateComment,
  currentUserId,
  // deleteComment,
  activeComment,
  setActiveComment,
  // parentId = null,
}) => {
  const fiveMinutes = 300000;
  // const timePassed = new Date() - new Date(comment?.date) > fiveMinutes;
  const canReply = Boolean(commentUserto);
  // const canEdit = commentUserto === comment?._id && !timePassed;
  // const canDelete = commentUserto === comment?._id && !timePassed;
  const isReplying =
    activeComment &&
    activeComment.type === "reply" &&
    activeComment.id === comment._id;
  const [toggle, setToggle] = useState(false);
  // const isEditing =
  //   activeComment &&
  //   activeComment.type === "edit" &&
  //   activeComment.id === comment._id;
  // const replyId = commentUserto ? commentUserto : comment._id;

  const handleReply = async (text) => {
    const response = await makeApiCall("/createComment", "PATCH", {
      comment_userto: commentUserto,
      text: text,
      topicId: topicId,
      type: "reply",
      comment_id: comment?._id,
    });

    if (response.message !== "reply created") {
      toast.error("something went wrong");
      return;
    }
    toast.success(response.message);
  };

  return (
    <Div>
      <div className="comment-image-container">
        <img
          src={
            comment?.from?.profileimg
              ? comment?.from?.profileimg
              : "/assets/svg/profilepix.svg"
          }
          width={"28px"}
          height={"28px"}
          alt="img"
          loading="lazy"
          style={{ borderRadius: "50%" }}
        />
      </div>
      <div className="comment-right-part">
        <div className="grey-bg">
          <div className="comment-content">
            <div className="comment-author">{comment?.from?.username}</div>
            <div className="time">
              <Moment fromNow ago>
                {comment?.date}
              </Moment>
            </div>
          </div>
          {/* {!isEditing &&
          } */}
          <div className="comment-text">{comment?.text}</div>
        </div>
        {/* {isEditing && (
          <CommentForm
            submitLabel="+"
            handleCancel={() => setActiveComment(null)}
            handleSubmit={(text) => handleReply(text)}
            initialText={comment.body}
            hasCancelButton
          />
        )} */}
        <div className="comment-actions">
          {canReply && (
            <div
              className="comment-action"
              onClick={() =>
                setActiveComment({
                  id: comment._id,
                  type: "reply",
                })
              }
            >
              Reply
            </div>
          )}
          {canReply && (
            <div className="reply-action" onClick={() => setToggle(!toggle)}>
              {replies?.length} replies
            </div>
          )}
          {/* {canEdit && (
            <div
              className="comment-action"
              onClick={() =>
                setActiveComment({
                  id: comment._id,
                  type: "edit",
                })
              }
            >
              Edit
            </div>
          )} */}
          {/* {canDelete && (
            <div
              className="comment-action"
              onClick={() => deleteComment(comment.id)}
            >
              Delete
            </div>
          )} */}
        </div>
        {isReplying && (
          <CommentForm
            submitLabel="+"
            handleSubmit={(text) => handleReply(text)}
          />
        )}
        {replies?.length > 0 && toggle && (
          <div className="replies">
            {replies?.map((reply) => (
              <Comment
                key={reply._id}
                comment={reply}
                replies={[]}
                currentUserId={currentUserId}
                // updateComment={updateComment}
                // addComment={addComment}
                activeComment={activeComment}
                setActiveComment={setActiveComment}
                // parentId={comment.id}
                // deleteComment={deleteComment}
              />
            ))}
          </div>
        )}
      </div>
    </Div>
  );
};

export default Comment;
