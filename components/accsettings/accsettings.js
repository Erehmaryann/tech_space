import style from "styled-components";
import LoginInputs from '../inputs/LoginInputs';

const AccSettings = () => {
    return (
        <AccParent>
            <h3>Account</h3>
            <LoginInputs type={`text`} placeholder={`+2348125671212`} label={`Phone number`} name={`phone`} />
            <LoginInputs type={`email`} placeholder={`Maryannereh@gmail.com`} label={`Email address`} name={`email`} />
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

export default AccSettings;