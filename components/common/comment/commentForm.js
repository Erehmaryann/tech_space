import { useState } from "react";
import { FormDiv } from "./commentFormStyles";
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

export default CommentForm;