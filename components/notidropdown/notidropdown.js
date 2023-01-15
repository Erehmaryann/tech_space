import NotiItem from "../notiItem/notiItem";
import { NotDiv } from "./notiStyles";

const NotiDropdown = () => {
  return (
    <NotDiv>
      <h4>Notifications</h4>
      <NotiItem />
    </NotDiv>
  );
};

export default NotiDropdown;
