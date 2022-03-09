// import { ReactComponent as Icon } from "../../public/assets/svg/notIcon.svg";
import Image from "next/image";
import { connect } from 'react-redux';
import styled from "styled-components";

import { toggleNotiHidden } from "../../redux/notification/noti.actions";
// import { createStructuredSelector } from 'reselect';


const NotIcon = ({ toggleNotiHidden }) => {
	return (
		<Div className="cart-icon" onClick={toggleNotiHidden}>
			<Image src="/assets/svg/notIcon.svg" width={28} height={28} alt="notiIcon" />
			<span className="item-count">1</span>
		</Div>
	);
};

const Div = styled.div`
	width: 45px;
	height: 45px;
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;

	.item-count {
		position: absolute;
		font-size: 10px;
		font-weight: bolder;
		right: 8px;
        bottom: 17px;
        background: #CF2A2A;
        border-radius: 50%;
        padding: 1px 4px;
        color: white;
	}
`;

const mapDispatchToProps = (dispatch) => ({
	toggleNotiHidden: () => dispatch(toggleNotiHidden()),
});

export default connect(null, mapDispatchToProps)(NotIcon);