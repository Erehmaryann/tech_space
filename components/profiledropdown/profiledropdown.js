import styled from 'styled-components';
import Link from 'next/link';

const Profiledropdown = () => {
    return (
        <ProDiv className="pro-dropdown">
            <div className="pro-items">
                <Link href="/profile">
                    My Profile
                </Link>
                <Link href="/settings">
                    Settings
                </Link>
                <Link href="/">
                    Logout
                </Link>
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

        a {
            padding: 10px 5px;
            font-size: 14px;

            :hover {
                background: #f5f5f5;
            }
        }
	}
`;

export default Profiledropdown;