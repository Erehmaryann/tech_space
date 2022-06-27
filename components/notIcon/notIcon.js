// import { ReactComponent as Icon } from "../../public/assets/svg/notIcon.svg";
import Image from "next/image";
import { connect } from 'react-redux';
import { Div } from './notIconStyles';
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

const mapDispatchToProps = (dispatch) => ({
	toggleNotiHidden: () => dispatch(toggleNotiHidden()),
});

export default connect(null, mapDispatchToProps)(NotIcon);