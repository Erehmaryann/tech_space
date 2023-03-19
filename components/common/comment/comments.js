import { useState, useEffect, useMemo } from "react";
import { makeApiCall } from "../../../lib/api";
import {
  updateComment as updateCommentApi,
  getComments as getCommentsApi,
  createComment as createCommentApi,
  deleteComment as deleteCommentApi,
} from "./api";
// import { useUser } from "../../../helper/get-user";
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
  const [backendComments, setBackendcomments] = useState([]);
  const [originalComments, setOriginalComments] = useState([]);
  const [activeComment, setActiveComment] = useState(null);
  const [limit, setLimit] = useState(1);
  const r = useMemo(() => [], []);

  useEffect(() => {
    // getCommentsApi().then((data) => {
    //   setBackendcomments(data);
    //   // console.log(limit);
    // });
    setOriginalComments(postComments);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [updatePost]);

  useEffect(() => {
    for (let i = 0; i <= limit; i++) {
      if (backendComments[i]) {
        r.push(backendComments[i]);
      }
    }
    // console.log(r);
  }, [backendComments, limit, r]);

  /*
    prev, current, next, step
    0-2        0    , 0 + 2    , 2
    
    array[4]
    
    array  = array[current];
    
    when next:
       c = current + step;
       current = c;
    
    when prev:
        p = current - 2;
        current = p 
    
    step: number of iterations or limit
    
    array_of_data = [1,2,3,4,5,6,7,8,9]
    
    for(let i = 0; i <= )
    */

  const getReplies = (reply) => {
    setBackendcomments(reply);
    // return backendComments
    //   .filter((backendComment) => backendComment.parentId === commentId)
    //   .sort((a, b) => new Date(a.createdat) - new Date(b.createdAt));
  };
  // id: Math.random().toString(36).substr(2, 9),
  //     body: text,
  //     parentId,
  //     userId: "1",
  //     username: "John",
  //     createdAt: new Date().toISOString(),\

  const handleSubmit = async (text) => {
    // console.log(text, topicId, commentUserto, "god abeg");

    const response = await makeApiCall("/createComment", "PATCH", {
      comment_userto: commentUserto,
      text: text,
      topicId: topicId,
      type: "comment",
    });
    // console.log(response, "went");
    // if (response.message !== "comment created") {
    //   toast.success('something went wrong)
    //   return;
    // }

    if (response.message !== "comment created") {
      toast.error("something went wrong");
      return;
    }
    setUpdatePost(!updatePost);
    toast.success(response.message);
    console.log(response, "went");
  };
  const addComment = async (text, topicId, type, commentUserto, comment_id) => {
    console.log(
      // text,
      // topicId,
      // type,
      commentUserto,
      // comment_id,
      "mannyy consoles"
    );
    // const response = await makeApiCall("/createComment", "POST", {
    //   comment_userto: commentUserto,
    //   text: text,
    //   topicId: topicId,
    //   type: "comment",
    // });
    // console.log(response, "went");
    // if (response.message !== "comment created") {
    //   toast.error('something went wrong);
    //   return;
    // }
    // createCommentApi(text, parentId).then((comment) => {
    //   setOriginalComments([comment, ...originalComments]);
    //   setActiveComment(null);
    // });
  };
  console.log(commentUserto, "I am tired");
  const updateComment = (text, commentId) => {
    updateCommentApi(text, commentId).then(() => {
      const updatedBackendComments = backendComments.map((backendComment) => {
        if (backendComment.id === commentId) {
          return { ...backendComment, body: text };
        }
        return backendComment;
      });
      setBackendcomments(updatedBackendComments);
      setActiveComment(null);
    });
  };

  const deleteComment = (commentId) => {
    if (window.confirm("Are you that you want to remove comment?")) {
      deleteCommentApi(commentId).then(() => {
        const updatedBackendComments = backendComments.filter(
          (backendComment) => backendComment.id !== commentId
        );
        setBackendcomments(updatedBackendComments);
      });
    }
  };

  return (
    <CommentDiv>
      <CommentForm
        submitLabel="+"
        commentUserto={commentUserto}
        topicId={topicId}
        handleSubmit={handleSubmit}
      />
      <div className="comments-container">
        {/* {rootComments.map((comment) => (
          <Comment
            key={comment.id}
            updateComment={updateComment}
            comment={comment}
            replies={getReplies(comment.id)}
            currentUserId={currentUserId}
            deleteComment={deleteComment}
            activeComment={activeComment}
            setActiveComment={setActiveComment}
            addComment={addComment}
          />
        ))} */}
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
            deleteComment={deleteComment}
            activeComment={activeComment}
            setActiveComment={setActiveComment}
            addComment={addComment}
          />
        ))}
      </div>
      {console.log(commentUserto, "hungry")}
      <div
        className="comment_load-more"
        onClick={() => setLimit((prevState) => prevState + 1)}
      >
        <p>Load More</p>
      </div>
    </CommentDiv>
  );
};

export default Comments;
