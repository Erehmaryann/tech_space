import LoginInputs from '../inputs/LoginInputs';
import { AccParent } from './accpasswordStyles';

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

export default AccPassword;