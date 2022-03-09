import NotiCustomItem from './notiCustomItem';
import { UserIcon } from "./icon";
import styled from "styled-components";

const notiData = [
    {
        id: "1",
        pix: <UserIcon />,
        name: "Costly A.",
        activity: "commented on your topic",
        option: "Registered for this, thanks.",
        time: "54mins"
    },
    {
        id: "2",
        pix: <UserIcon />,
        name: "Joshua Uzor",
        activity: "commented on your topic",
        option: "Registered for this, thanks.",
        time: "54mins"
    },
    {
        id: "3",
        pix: <UserIcon />,
        name: "your topic has been approved!",
        link: "view"
    },
    {
        id: "4",
        pix: <UserIcon />,
        name: "Complete your profile",
        link: "open"
    },
];

const NotiItem = () => {
    return (
        <MainDiv>
            {
                notiData.length !== 0 ? (
                    notiData.map((message, idx) => (
                        <NotiCustomItem pix={message.pix} key={idx} name={message.name}
                            activity={message.activity} option={message.option} time={message.time} link={message.link} />
                    ))
                ) : <div> No notifications yet! </div>
            }
        </MainDiv>
    );
};

const MainDiv = styled.div`
    overflow-y: auto;
    height: 450px;
`;

export default NotiItem;