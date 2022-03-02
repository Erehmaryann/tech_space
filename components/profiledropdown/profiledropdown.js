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
	width: 240px;
	height: 340px;
	display: flex;
	flex-direction: column;
	padding: 20px;
	border: 1px solid black;
	background-color: white;
	top: 90px;
	right: 40px;
	z-index: 5;

	.pro-items {
		height: 240px;
		display: flex;
		flex-direction: column;
		/* overflow: scroll; */
	}
`;

export default Profiledropdown;