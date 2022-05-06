import styled from 'styled-components';

export const Div = styled.div`
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