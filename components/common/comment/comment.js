import styled from "styled-components";
import Image from "next/image";
import CommentForm from './commentForm';

// import { updateComment } from "./api";

import Moment from 'react-moment';


const Comment = ({ comment, replies, addComment, updateComment, currentUserId,// deleteComment, 
    activeComment, setActiveComment, parentId = null }) => {
    const fiveMinutes = 300000;
    const timePassed = new Date() - new Date(comment.createdAt) > fiveMinutes;

    const canReply = Boolean(currentUserId);
    const canEdit = currentUserId === comment.userId && !timePassed;
    // const canDelete = currentUserId === comment.userId && !timePassed;
    const createdAt = new Date(comment.createdAt);
    const isReplying = activeComment && activeComment.type === "replying" && activeComment.id === comment.id;
    const isEditing = activeComment && activeComment.type === "editing" && activeComment.id === comment.id;
    const replyId = parentId ? parentId : comment.id;

    return (
        <Div>
            <div className="comment-image-container">
                <Image src="/assets/svg/profilepix.svg" width={28} height={28} alt="user-image" />
            </div>
            <div className="comment-right-part">
                <div className="grey-bg">
                    <div className="comment-content">
                        <div className="comment-author">
                            {comment.username}
                        </div>
                        <div className="time">
                            <Moment fromNow ago>
                                {createdAt}
                            </Moment>
                        </div>
                    </div>
                    {!isEditing && <div className="comment-text">{comment.body}</div>}
                </div>
                {isEditing && (
                    <CommentForm submitLabel="+" handleCancel={() => setActiveComment(null)} handleSubmit={(text) => updateComment(text, comment.id)} initialText={comment.body} hasCancelButton />
                )}
                <div className="comment-actions">
                    {canReply && <div className="comment-action" onClick={() => setActiveComment({
                        id: comment.id, type: "replying",
                    })}>Reply</div>}
                    {canEdit && <div className="comment-action" onClick={() => setActiveComment({
                        id: comment.id, type: "editing",
                    })}>Edit</div>}
                    {/* {canDelete && <div 
                    className="comment-action"
                    onClick={() => deleteComment(comment.id)}
                    >Delete</div>} */}
                </div>
                {isReplying && (
                    <CommentForm submitLabel="+" handleSubmit={(text) => addComment(text, replyId)} />
                )}
                {replies.length > 0 && (
                    <div className="replies">
                        {
                            replies.map((reply) => (
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
                            ))
                        }
                    </div>
                )}
            </div>
        </Div>
    );
};

const Div = styled.div`
    display: flex;
    margin-bottom: 10px;

    .comment-image-container {
        margin-right: 12px;
    }

    .comment-right-part {
        width: 100%;
        .grey-bg {
            background: #F1F1F1;
            padding: 1rem 0 1rem 1rem;
            box-sizing: border-box;
            border-radius: 0px 10px 10px 10px;
        }
    }

    .comment-content {
        display: flex;
        color: #C4C4C4;
        font-size: 9px;
        align-items: center;
        padding-bottom: 0.5rem;

        .time {
            &::before {
                content: "•";
                padding-left: 1rem;
                padding-right: 0.2rem;
                font-weight: bold;
            }
        }
    }

    .comment-author {
        /* margin-right: 8px; */
        font-size: 12px;
        font-weight: 600;
        color: #374956;
        
    }

    .comment-text {
        font-size: 10px;
        color: #374956;
    }

    .comment-actions {
        display: flex;
        /* font-size: 12px; */
        cursor: pointer;
        margin-top: 8px;
    }

    .comment-action {
        margin-right: 8px;
        font-size: 11px;
        color: #A2A2A2;
        font-weight: 400;
        &::before {
            content: "•";
            padding-right: 0.2rem;
        }
    }

    .comment-action:hover {
        color: #409DE0;
    }

    .replies {
        margin-top: 20px;
    }
`;

export default Comment;