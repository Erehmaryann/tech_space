import styled from 'styled-components';
import { connect } from "react-redux";
import { toggleProfileHidden } from "../../redux/profile/profile.actions";

import Link from 'next/link';

const Profiledropdown = ({ toggleProfileHidden }) => {
    return (
        <ProDiv className="pro-dropdown">
            <div className="pro-items">
                <span onClick={toggleProfileHidden}>
                    <Link href="/profile">
                        My Profile
                    </Link>
                </span>
                <span onClick={toggleProfileHidden}>
                    <Link href="/settings">
                        Settings
                    </Link>
                </span>
                <span onClick={toggleProfileHidden}>
                    <Link href="/">
                        Logout
                    </Link>
                </span>
            </div>
        </ProDiv>
    );
};

const ProDiv = styled.div`
    position: absolute;
	width: 140px;
	height: 180px;
	display: flex;
	flex-direction: column;
	padding: 20px;
	background-color: white;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.2);
	top: 80px;
    border-radius: 10px;
	right: 20px;
	z-index: 5;

	.pro-items {
		height: 240px;
		display: flex;
		flex-direction: column;

        span {
            padding: 10px 5px;
            font-size: 14px;

            :hover {
                background: #ECECEC;
            }
        }
	}
`;

const mapDispatchToProps = (dispatch) => ({
    toggleProfileHidden: () => dispatch(toggleProfileHidden())
});

export default connect(null, mapDispatchToProps)(Profiledropdown);