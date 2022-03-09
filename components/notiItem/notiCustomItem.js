import styled from "styled-components";
import Link from 'next/link';

import { connect } from 'react-redux';
import { toggleNotiHidden } from "../../redux/notification/noti.actions";

const NotiCustomItem = ({ pix, name, activity, option, time, link, toggleNotiHidden }) => {
  return (
    <CustomDiv>
      <div className="pix">
        {pix}
      </div>
      <div className="action">
        <p>
          <span>{name}</span>
          {activity}
        </p>
        {option && <small>{option}</small>}
      </div>
      {time && <small>{time}</small>}
      {link &&
        <span onClick={toggleNotiHidden}>
          <Link href="/">
            <a>{link}</a>
          </Link>
        </span>
      }
    </CustomDiv>
  );
};

const CustomDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 15px;
  border-bottom: 3px solid #F9F9F9;

  &: hover {
    background-color: #ABCEE7;
  }

  .pix {
    margin-top: 10px; 
  }

  .action {
    p {
      font-size: 12px;
      margin-bottom: 0px;

      span {
        color: #409DE0;
      }
    }
    small {
      font-size: 10px;
      color: #C4C4C4;
      /* margin-top: -0px; */
    }
  }
  small {
    color: #C4C4C4;
    font-size: 10px;
  }
  a {
    font-size: 9px;
    color: #C4C4C4;
  }
`;

const mapDispatchToProps = (dispatch) => ({
  toggleNotiHidden: () => dispatch(toggleNotiHidden()),
});

export default connect(null, mapDispatchToProps)(NotiCustomItem);