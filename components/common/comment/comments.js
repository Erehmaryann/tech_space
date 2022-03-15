import { useState, useEffect } from 'react';
import { updateComment as updateCommentApi, getComments as getCommentsApi, createComment as createCommentApi, deleteComment as deleteCommentApi } from './api';

import Comment from './comment';
import CommentForm from "./commentForm";
import styled from "styled-components";

const Comments = ({ currentUserId }) => {
    const [backendComments, setBackendcomments] = useState([]);
    const [activeComment, setActiveComment] = useState(null);

    const rootComments = backendComments.filter(
        comment => comment.parentId === null
    );

    useEffect(() => {
        getCommentsApi().then(data => {
            setBackendcomments(data);
        });
    }, []);

    const getReplies = commentId => {
        return backendComments.filter(backendComment => backendComment.parentId === commentId).sort((a, b) => new Date(a.createdat) - new Date(b.createdAt));
    };

    const addComment = (text, parentId) => {
        createCommentApi(text, parentId).then(comment => {
            setBackendcomments([comment, ...backendComments]);
            setActiveComment(null);
        });
    };

    const updateComment = (text, commentId) => {
        updateCommentApi(text, commentId).then(() => {
            const updatedBackendComments = backendComments.map(backendComment => {
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
            <CommentForm submitLabel="+" handleSubmit={addComment} />
            <div className="comments-container">
                {
                    rootComments.map(comment => (
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
                    ))
                }
            </div>
        </CommentDiv>
    );
};

const CommentDiv = styled.div`
    background: rgb(255, 255, 255);
    width: 765px;
    box-shadow: 0px 4px 4px rgba(55, 73, 86, 0.07);
    border-radius: 15px;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;


    .comments-container {
        margin-top: 20px;
    }
`;

export default Comments;