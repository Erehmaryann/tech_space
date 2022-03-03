import style from "styled-components";
import LoginInputs from '../inputs/LoginInputs';

const AccSettings = () => {
    return (
        <AccParent>
            <h3>Account</h3>
            <LoginInputs type={`text`} placeholder={`+2348125671212`} label={`Phone number`} name={`phone`} />
            <LoginInputs type={`email`} placeholder={`Maryannereh@gmail.com`} label={`Email address`} name={`email`} />
        </AccParent>
    );
};

const AccParent = style.div`
    background: #fff;
    padding: 20px;

    h3 {
        font-size: 17px;
        // padding-top: 10px
    }
`;

export default AccSettings;