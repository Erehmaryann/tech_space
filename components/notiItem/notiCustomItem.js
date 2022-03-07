import styled from "styled-components";

const NotiCustomItem = ({ pix, name, activity, option, time }) => {
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
        <small>{option}</small>
      </div>
      <small>{time}</small>
    </CustomDiv>
  );
};

const CustomDiv = styled.div`
  display: flex;
`;

export default NotiCustomItem;