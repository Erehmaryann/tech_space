import styled from "styled-components";
import Link from 'next/link';

const NotiCustomItem = ({ pix, name, activity, option, time, link }) => {
  return (
    <CustomDiv>
      <div className="">
        {pix}
      </div>
      <div className="">
        <p>
          <span>{name}</span>
          {activity}
        </p>
        {option && <small>{option}</small>}
      </div>
      {time && <small>{time}</small>}
      {time ?
        <small>{time}</small> :
        <Link href="/home">
          <a>{link}</a>
        </Link>
      }
    </CustomDiv>
  );
};

const CustomDiv = styled.div`
  display: flex;
`;

export default NotiCustomItem;