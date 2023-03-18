/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Moment from "react-moment";
import CommentForm from "./commentForm";
import { CommentDiv, Div } from "./commentStyles";

const Comment = ({ comment, postOwnerImg, currentUserId }) => {
  const [activeComment, setActiveComment] = useState(null);

  console.log(comment, "comment page");

  const fiveMinutes = 300000;
  const timePassed = new Date() - new Date(comment?.date) > fiveMinutes;

  const canReply = Boolean(currentUserId);
  const canEdit = currentUserId === comment?._Id && !timePassed;
  const canDelete = currentUserId === comment?._Id && !timePassed;
  const createdAt = new Date(comment?.date);

  //   const replyId = comment?.from ? comment?.from : comment._id;
  const isReplying =
    activeComment &&
    activeComment.type === "replying" &&
    activeComment.id === comment._id;
  const isEditing =
    activeComment &&
    activeComment.type === "editing" &&
    activeComment.id === comment._id;
  const replyId = comment._id;

  return (
    <CommentDiv>
      <CommentForm postOwnerImg={postOwnerImg} />
      <div className="comments-container">
        <Div>
          <div className="comment-image-container">
            <img
              src="/assets/svg/profilepix.svg"
              width={"28px"}
              height={"28px"}
              alt="user-image"
              style={{ borderRadius: "50%" }}
            />
          </div>
          <div className="comment-right-part">
            <div className="grey-bg">
              <div className="comment-content">
                <div className="comment-author">{comment?.username}</div>
                <div className="time">
                  <Moment fromNow ago>
                    {comment?.date}
                  </Moment>
                </div>
              </div>
              {!isEditing && (
                <div className="comment-text">{comment?.text}</div>
              )}
            </div>
            {isEditing && (
              <CommentForm
                postOwnerImg={postOwnerImg}
                // submitLabel="+"
                // handleCancel={() => setActiveComment(null)}
                // handleSubmit={(text) => updateComment(text, comment.id)}
                initialText={comment.text}
                // hasCancelButton
              />
            )}
            <div className="comment-actions">
              {canReply && (
                <div
                  className="comment-action"
                  onClick={() =>
                    setActiveComment({
                      id: comment.id,
                      type: "replying",
                    })
                  }
                >
                  Reply
                </div>
              )}
              {canEdit && (
                <div
                  className="comment-action"
                  onClick={() =>
                    setActiveComment({
                      id: comment.id,
                      type: "editing",
                    })
                  }
                >
                  Edit
                </div>
              )}
              {/* {canDelete && <div 
                    className="comment-action"
                    onClick={() => deleteComment(comment.id)}
                    >Delete</div>} */}
            </div>
            {isReplying && (
              <CommentForm
                postOwnerImg={postOwnerImg}
                // submitLabel="+"
                // handleSubmit={(text) => addComment(text, replyId)}
              />
            )}
            {/* {comment?.reply?.length > 0 && (
              <div className="replies">
                {comment?.reply?.map((reply) => (
                  <Comment key={reply?._id} comment={reply} />
                ))}
              </div>
            )} */}
          </div>
        </Div>
      </div>
      <div
        className="comment_load-more"
        // onClick={() => setLimit((prevState) => prevState + 1)}
      >
        <p>Load More</p>
      </div>
    </CommentDiv>
  );
};

export default Comment;
