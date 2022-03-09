import NotiItem from '../notiItem/notiItem';
import styled from "styled-components";

const NotiDropdown = () => {
    return (
        <NotDiv>
            <div className="overflow">
                <h4>Notifications</h4>
                <NotiItem />
            </div>
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

    .overflow {
        overflow-y: auto;
        height: 100%; 
    }
`;

export default NotiDropdown;