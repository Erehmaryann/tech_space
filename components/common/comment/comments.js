import { useState, useEffect } from 'react';
import { getComments as getCommentsApi } from './api';

import Comment from './comment';
import styled from "styled-components";

const Comments = ({ currentUserId }) => {
    const [backendComments, setBackendcomments] = useState([]);
    const rootComments = backendComments.filter(comment => comment.parentId === null);

    useEffect(() => {
        getCommentsApi().then(data => {
            setBackendcomments(data);
            console.log(data);
        });
    }, []);

    return (
        <CommentDiv>
            <h3 className="comments-title">Comments</h3>
            <div className="comments-container">
                {
                    rootComments.map(comment => (
                        <Comment key={comment.id} comment={comment} />
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

    /* .comment {
    display: flex;
    margin-bottom: 28px;
    }

    .comment-image-container {
    margin-right: 12px;
    } */
/* 
    .comment-image-container img {
    border-radius: 50px;
    } */

    /* .comment-right-part {
    width: 100%;
    } */

    /* .comment-content {
    display: flex;
    }

    .comment-author {
    margin-right: 8px;
    font-size: 20px;
    color: rgb(59, 130, 246);
    }

    .comment-text {
    font-size: 18px;
    }

    .comment-actions {
    display: flex;
    font-size: 12px;
    color: rgb(51, 51, 51);
    cursor: pointer;
    margin-top: 8px;
    }

    .comment-action {
    margin-right: 8px;
    }

    .comment-action:hover {
    text-decoration: underline;
    }

    .replies {
    margin-top: 20px;
    } */
`;

export default Comments;