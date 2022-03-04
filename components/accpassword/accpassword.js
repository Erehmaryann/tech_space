import style from "styled-components";
import LoginInputs from '../inputs/LoginInputs';

const AccPassword = () => {
    return (
        <AccParent>
            <h3>Change Password</h3>
            <LoginInputs type={`password`} label={`New password`} name={`password`} />
            <LoginInputs type={`password`} label={`Confirm new password`} name={`confirm-password`} />
            <button className="button">Save</button>
        </AccParent>
    );
};

const AccParent = style.div`
    background: #fff;
    padding: 20px;

    h3 {
        font-size: 17px;
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
`;

export default AccPassword;