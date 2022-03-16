import { useState, useEffect, useMemo } from 'react';
import { updateComment as updateCommentApi, getComments as getCommentsApi, createComment as createCommentApi, deleteComment as deleteCommentApi } from './api';

import Comment from './comment';
import CommentForm from "./commentForm";
import styled from "styled-components";

const Comments = ({ currentUserId }) => {
    const [backendComments, setBackendcomments] = useState([]);
    const [activeComment, setActiveComment] = useState(null);
    const [limit, setLimit] = useState(1);


    const r = useMemo(() => [], []);
    const rootComments = backendComments.filter(
        comment => comment.parentId === null
    );

    useEffect(() => {
        getCommentsApi().then((data) => {
            setBackendcomments(data);
            console.log(limit);
        });
    }, [limit]);

    useEffect(() => {
        for (let i = 0; i <= limit; i++) {
            if (backendComments[i]) {
                r.push(backendComments[i]);
            }
        }
        console.log(r);
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
            <div className="comment_load-more" onClick={() => setLimit((prevState) => prevState + 1)}>
                <p>Load More</p>
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
    position: relative;

    .comments-container {
        margin: 20px 0;
    }

    .comment_load-more {
        cursor: pointer;
        p {
            position: absolute;
            right: 18px;
            font-size: 12px;
            color: #409DE0;
            font-weight: 600;
            bottom: 20px;

            :hover {
                color: #A2A2A2;
            }
        }
    }
`;

export default Comments;