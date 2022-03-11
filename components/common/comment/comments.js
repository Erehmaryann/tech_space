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

    const addComment = (text, parentId) => {
        console.log('addComment', text, parentId);
    };

    return (
        <CommentDiv>
            {/* <h3 className="comments-title">Comments</h3>
            <div className="comment-form-title">Write comment</div> */}
            <CommentForm submitLabel="+" handleSubmit="addComment" />
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
    background: rgb(255, 255, 255);
    width: 765px;
    height: 680px;
    box-shadow: 0px 4px 4px rgba(55, 73, 86, 0.07);
    border-radius: 15px;
    margin-top: 20px;

    .comments-container {
    margin-top: 40px;
    }
`;

export default Comments;