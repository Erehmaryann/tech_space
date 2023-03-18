/* eslint-disable @next/next/no-img-element */
import { Div } from "./commentStyles";
import Image from "next/image";
import CommentForm from "./commentForm";
import { toast } from "react-hot-toast";
// import { updateComment } from "./api";

import Moment from "react-moment";
import { makeApiCall } from "../../../lib/api";

const Comment = ({
  comment,
  replies,
  addComment,
  topicId,
  commentUserto,
  updateComment,
  currentUserId, // deleteComment,
  activeComment,
  setActiveComment,
  parentId = null,
}) => {
  const fiveMinutes = 300000;
  const timePassed = new Date() - new Date(comment.createdAt) > fiveMinutes;

  const canReply = Boolean(currentUserId);
  const canEdit = currentUserId === comment.userId && !timePassed;
  const canDelete = currentUserId === comment.userId && !timePassed;
  const createdAt = new Date(comment.createdAt);
  const isReplying =
    activeComment &&
    activeComment.type === "replying" &&
    activeComment.id === comment._id;
  const isEditing =
    activeComment &&
    activeComment.type === "editing" &&
    activeComment.id === comment.id;
  const replyId = parentId ? parentId : comment.id;
  console.log(activeComment, "let's confirm");

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
          alt="user-image"
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
          {!isEditing && <div className="comment-text">{comment?.text}</div>}
        </div>
        {isEditing && (
          <CommentForm
            submitLabel="+"
            handleCancel={() => setActiveComment(null)}
            handleSubmit={(text) => updateComment(text, comment._id)}
            initialText={comment.body}
            hasCancelButton
          />
        )}
        <div className="comment-actions">
          {canReply && (
            <div
              className="comment-action"
              onClick={() =>
                setActiveComment({
                  id: comment._id,
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
            submitLabel="+"
            // handleSubmit={(text, topicId, commentUserto) =>
            //   addComment(text, topicId, type, commentUserto, comment?._id)
            // }
            handleSubmit={(text) => handleReply(text)}
          />
        )}
        {replies.length > 0 && (
          <div className="replies">
            {replies.map((reply) => (
              <Comment
                key={reply.id}
                comment={reply}
                replies={[]}
                currentUserId={currentUserId}
                updateComment={updateComment}
                addComment={addComment}
                activeComment={activeComment}
                setActiveComment={setActiveComment}
                parentId={comment.id}
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
