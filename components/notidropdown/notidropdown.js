import NotiItem from '../notiItem/notiItem';
import styled from "styled-components";

const NotiDropdown = () => {
    return (
        <NotDiv>
            <h4>Notifications</h4>
            <NotiItem />
        </NotDiv>
    );
};

const NotDiv = styled.div`
    position: absolute;
	width: 366px;
    height: 555px;
	display: flex;
	flex-direction: column;
	padding: 20px;
	background: #F6F6F6;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.2);
	top: 80px;
    border-radius: 10px;
	right: 10px;
	z-index: 5;

    h4 {
        margin-top: -2px;
        color: #374956;
        font-size: 15px;
    }
`;

export default NotiDropdown;