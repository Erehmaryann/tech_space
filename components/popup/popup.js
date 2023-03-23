import Link from "next/link";
import { PopupDiv } from "./popupStyles";

const Popup = ({ closePopup, text }) => {
  return (
    <PopupDiv>
      <span>{text}</span>
      <div onClick={() => closePopup} className="view">
        <Link href="/dashboard/saved-topics">
          <a>View</a>
        </Link>
      </div>
    </PopupDiv>
  );
};

export default Popup;
