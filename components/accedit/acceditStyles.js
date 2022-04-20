import style from "styled-components";

export const AccParent = style.div`
    background: #fff;
    padding: 20px;

    .img {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        h3{
            color: #409DE0;
            font-size: 17px;
            margin-top: -2px;
        }
    }

    .button {
        width: 74px;
        background: #409DE0;
        border-radius: 15px;
        color: #fff;
        border: none;
        outline: none;
        padding: 10px;
        font-size: 16px;
    }
    .input-group {
        label {
            text-align: justify !important;
        }

        textarea {
            margin-top: 5px;
            display: block;
            width: 100%;
            background: #f5f5f5;
            border: none;
            border-radius: 10px;
            outline: none;
            margin-bottom: 10px;
            padding: 15px
        }
    }
`;
