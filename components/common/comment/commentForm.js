import { useState } from "react";
import styled from "styled-components";
import Image from "next/image";

const CommentForm = ({ handleSubmit, submitLabel }) => {
    const [text, setText] = useState("");
    const isTextareaDisabled = text.length === 0;

    const onSubmit = e => {
        e.preventDefault();
        handleSubmit(text);
        setText("");
    };

    const onPress = e => {
        e.preventDefault;
        if (e.key === "Enter" && !isTextareaDisabled) {
            onSubmit(e);
        }
    };

    return (
        <FormDiv>
            <form onKeyPress={onPress} onSubmit={onSubmit}>
                <div className="">
                    <Image src="/assets/svg/profilepix.svg" width={28} height={28} alt="user-image" />
                    <textarea
                        className="comment-form-textarea"
                        placeholder="Add comment"
                        value={text}
                        onChange={e => setText(e.target.value)}
                    />
                    {/* <button className="comment-form-button" type="submit" disabled={isTextareaDisabled}>{submitLabel}</button> */}
                </div>
            </form>
        </FormDiv>
    );
};

const FormDiv = styled.div`
    .comment-form-textarea {
        border: 1px solid rgb(107, 114, 12);
        outline: none;
        resize: none;
    }

    .comment-form-button {
        font-size: 16px;
        padding: 2px;
        background: rgb(59, 130, 246);
        border: none;
        outline: none;
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

export default CommentForm;