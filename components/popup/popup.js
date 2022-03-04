import styled from "styled-components";
import Link from 'next/link';

const Popup = ({ closePopup }) => {
    return (
        <PopupDiv>
            <span>Topic has been saved.</span>
            <div onClick={() => closePopup} className="view">
                <Link href="/saved-topics">
                    <a>
                        View
                    </a>
                </Link>
            </div>
        </PopupDiv>
    );
};

const PopupDiv = styled.div`
    display: flex;
    justify-content: space-between;
    color: #fff;
    font-size: 13px;
    background: #409DE0;
    width: 233px;
    position: absolute;
    padding: 15px;
    z-index: 100;
    top: -65px;
    right: -70px;
    border-radius: 15px;

    .view {
        cursor: pointer;
    }
`;

export default Popup;