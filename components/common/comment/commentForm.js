import { useState } from "react";
import styled from "styled-components";
import Image from "next/image";

const CommentForm = ({ handleSubmit, hasCancelButton = false, initialText = "", handleCancel, submitLabel }) => {
    const [text, setText] = useState(initialText);
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
                <Image src="/assets/svg/profilepix.svg" width={28} height={28} alt="user-image" />
                <textarea
                    className="comment-form-textarea"
                    placeholder="Add comment"
                    value={text}
                    onChange={e => setText(e.target.value)}
                />
                {/* <button className="comment-form-button" type="submit" disabled={isTextareaDisabled}>{submitLabel}</button> */}
                {hasCancelButton && (
                    <button className="comment-form-button comment-form-cancel-button" type="button" onClick={handleCancel}>
                        X
                    </button>
                )}
            </form>
        </FormDiv>
    );
};

const FormDiv = styled.div`
    margin-top: 1.8rem;
    display: flex;
    justify-content: flex-start;
    
    .comment-form-textarea {
        width: 382px;
        height: 37px;
        background: #F1F1F1;
        border: 1px solid #FFFFFF;
        box-sizing: border-box;
        border-radius: 7px;
        outline: none;
        resize: none;
        position: relative;
        margin-left: 1.1rem;
        margin-right: 1.1rem;
        margin-bottom: -0.4rem;

        &::placeholder {
            color: #374956;
            font-weight: 400;
            font-size: 10px;
            padding-top: 0.5rem;
            padding-left: 0.5rem;
        }
    }

    .comment-form-button {
        font-size: 16px;
        padding: 2px;
        border: none;
        outline: none;
        border-radius: 8px;
        color: grey;
    }

    .comment-form-button:hover:enabled {
        cursor: pointer;
        background: #A2A2A2;
    }

    .comment-form-button:disabled {
        opacity: 0.7;
        cursor: default;
    }

    .comment-form-cancel-button {
        margin-left: -35px;
        margin-top: 0.4rem;
        font-size: 11px;
        position: absolute;
    }
`;

export default CommentForm;