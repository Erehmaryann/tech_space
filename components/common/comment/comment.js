import styled from "styled-components";
import Image from "next/image";
import CommentForm from './commentForm';

import Moment from 'react-moment';
import moment from 'moment';


const Comment = ({ comment, replies, addComment, currentUserId,// deleteComment, 
    activeComment, setActiveComment, parentId = null }) => {
    const fiveMinutes = 300000;
    const timePassed = new Date() - new Date(comment.createdAt) > fiveMinutes;
    const start = moment().add(-4, 'm');

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
                <div className="comment-text">{comment.body}</div>
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
    margin-bottom: 28px;

    .comment-image-container {
        margin-right: 12px;
    }

    .comment-right-part {
        width: 100%;
    }

    .comment-content {
        display: flex;
        .time {
            &::before {
                content: "•";
            }
        }
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
    }
`;

export default Comment;