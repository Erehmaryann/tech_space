import styled from "styled-components";
import Image from "next/image";

const Comment = ({ comment, replies }) => {
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
                    <div>{comment.createdAt}</div>
                </div>
                <div className="comment-text">
                    {comment.body}
                </div>
                {replies.length > 0 && (
                    <div className="replies">
                        {
                            replies.map((reply) => (
                                <Comment key={reply.id} comment={reply} replies={[]} />
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