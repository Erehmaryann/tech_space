import Link from "next/link";
import { CustomDiv } from "./notiStyles";
import { connect } from "react-redux";
import { toggleNotiHidden } from "../../redux/notification/noti.actions";

const NotiCustomItem = ({
  pix,
  name,
  activity,
  option,
  time,
  link,
  toggleNotiHidden,
}) => {
  return (
    <CustomDiv>
      <div className="pix">{pix}</div>
      <div className="action">
        <p>
          <span>{name}</span>
          {activity}
        </p>
        {option && <small>{option}</small>}
      </div>
      {time && <small>{time}</small>}
      {link && (
        <span onClick={toggleNotiHidden}>
          <Link href="/">
            <a>{link}</a>
          </Link>
        </span>
      )}
    </CustomDiv>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleNotiHidden: () => dispatch(toggleNotiHidden()),
});

export default connect(null, mapDispatchToProps)(NotiCustomItem);
