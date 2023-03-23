import { useState, useEffect } from "react";
import { makeApiCall } from "../../../lib/api";
import Comment from "./comment";
import CommentForm from "./commentForm";
import { CommentDiv } from "./commentsStyles";
import { toast } from "react-hot-toast";

const Comments = ({
  currentUserId,
  commentUserto,
  topicId,
  postComments,
  setUpdatePost,
  updatePost,
}) => {
  const [originalComments, setOriginalComments] = useState([]);
  const [activeComment, setActiveComment] = useState(null);

  useEffect(() => {
    setOriginalComments(postComments);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [updatePost]);

  const handleSubmit = async (text) => {
    const response = await makeApiCall("/createComment", "PATCH", {
      comment_userto: commentUserto,
      text: text,
      topicId: topicId,
      type: "comment",
    });

    if (response.message.acknowledged === false) {
      toast.error("something went wrong");
      return;
    }
    setUpdatePost(!updatePost);
    toast.success("comment created successfully");
  };

  // const updateComment = (text, commentId) => {
  //   updateCommentApi(text, commentId).then(() => {
  //     const updatedBackendComments = backendComments.map((backendComment) => {
  //       if (backendComment.id === commentId) {
  //         return { ...backendComment, body: text };
  //       }
  //       return backendComment;
  //     });
  //     setBackendcomments(updatedBackendComments);
  //     setActiveComment(null);
  //   });
  // };

  // const deleteComment = (commentId) => {
  //   if (window.confirm("Are you that you want to remove comment?")) {
  //     deleteCommentApi(commentId).then(() => {
  //       const updatedBackendComments = backendComments.filter(
  //         (backendComment) => backendComment.id !== commentId
  //       );
  //       setBackendcomments(updatedBackendComments);
  //     });
  //   }
  // };

  return (
    <CommentDiv>
      <CommentForm
        submitLabel="+"
        commentUserto={commentUserto}
        topicId={topicId}
        handleSubmit={handleSubmit}
      />
      <div className="comments-container">
        {originalComments?.map((comment) => (
          <Comment
            key={comment._id}
            // updateComment={updateComment}
            comment={comment}
            replies={comment?.reply}
            // replies={[]}
            topicId={topicId}
            commentUserto={commentUserto}
            currentUserId={currentUserId}
            // deleteComment={deleteComment}
            activeComment={activeComment}
            setActiveComment={setActiveComment}
          />
        ))}
      </div>
    </CommentDiv>
  );
};

export default Comments;
