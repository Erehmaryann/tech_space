import { useState, useEffect } from 'react';
import { getComments as getCommentsApi } from './api';

import Comment from './comment';
import CommentForm from "./commentForm";
import styled from "styled-components";

const Comments = ({ currentUserId }) => {
    const [backendComments, setBackendcomments] = useState([]);
    const rootComments = backendComments.filter(comment => comment.parentId === null);

    useEffect(() => {
        getCommentsApi().then(data => {
            setBackendcomments(data);
        });
    }, []);

    const getReplies = commentId => {
        return backendComments.filter(backendComment => backendComment.parentId === commentId).sort((a, b) => new Date(a.createdat).getTime() - new Date(b.createdAt).getTime());
    };

    const addComment = (text, parentId) => { };

    return (
        <CommentDiv>
            <h3 className="comments-title">Comments</h3>
            <div className="comment-form-title">Write comment</div>
            <CommentForm submitLabel="Write" handleSubmit="addComment" />
            <div className="comments-container">
                {
                    rootComments.map(comment => (
                        <Comment key={comment.id} comment={comment} replies={getReplies(comment.id)} />
                    ))
                }
            </div>
        </CommentDiv>
    );
};

const CommentDiv = styled.div`
  margin-top: 20px;

    .comments-title {
    font-size: 30px;
    margin-bottom: 20px;
    }

    .comments-container {
    margin-top: 40px;
    }

    .comment-form-title {
    font-size: 22px;
    }

    .comment-form-textarea {
    width: 100%;
    height: 80px;
    margin-bottom: 8px;
    margin-top: 8px;
    border: 1px solid rgb(107, 114, 12);
    }

    .comment-form-button {
    font-size: 16px;
    padding: 8px 16px;
    background: rgb(59, 130, 246);
    border-radius: 8px;
    color: white;
    }

    .comment-form-button:hover:enabled {
    cursor: pointer;
    background: rgb(37, 99, 235);
    }

    .comment-form-button:disabled {
    opacity: 0.7;
    cursor: default;
    }

    .comment-form-cancel-button {
    margin-left: 10px;
    }
`;

export default Comments;