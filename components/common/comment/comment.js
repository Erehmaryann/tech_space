/* eslint-disable @next/next/no-img-element */
import { Div } from "./commentStyles";
import Image from "next/image";
import CommentForm from "./commentForm";

// import { updateComment } from "./api";

import Moment from "react-moment";

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
    activeComment.id === comment.id;
  const isEditing =
    activeComment &&
    activeComment.type === "editing" &&
    activeComment.id === comment.id;
  const replyId = parentId ? parentId : comment.id;
  // console.log(comment, "let's confirm");
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
        {console.log(commentUserto, "Oleee")}
        {isReplying && (
          <CommentForm
            submitLabel="+"
            handleSubmit={(text, topicId, commentUserto) =>
              addComment(text, topicId, type, commentUserto, comment?._id)
            }
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
