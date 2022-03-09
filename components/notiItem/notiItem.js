import NotiCustomItem from './notiCustomItem';
import { UserIcon } from "./icon";

const notiData = [
    // {
    //     id: "1",
    //     pix: <UserIcon />,
    //     name: "Costly A.",
    //     activity: "commented on your topic",
    //     option: "Registered for this, thanks.",
    //     time: "54mins"
    // },
    // {
    //     id: "2",
    //     pix: <UserIcon />,
    //     name: "Joshua Uzor",
    //     activity: "commented on your topic",
    //     option: "Registered for this, thanks.",
    //     time: "54mins"
    // },
    // {
    //     id: "3",
    //     pix: <UserIcon />,
    //     activity: "your topic has been approved!",
    // }
];

const NotiItem = () => {
    return (
        <div>
            {
                notiData.length !== 0 ? (
                    notiData.map((message, idx) => (
                        <NotiCustomItem pix={message.pix} key={idx} name={message.name}
                            activity={message.activity} option={message.option} time={message.time} />
                    ))
                ) : <div> No notifications yet! </div>
            }
        </div>
    );
};

export default NotiItem;