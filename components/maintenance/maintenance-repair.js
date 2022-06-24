/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import EmptyState from "../empty-state/empty-state";
import Comments from '../common/comment/comments';
import { PostsDataContainer, HomeItemContainer, PostsDataHeader, PostName, PostBody, BottomDiv } from "./maintenanceStyles";
import Popup from "../popup/popup";

const maintenanceData = [
    {
        id: 1,
        profilePix: "/assets/svg/profilepix.svg",
        name: "Maryann Ereh",
        time: "54 mins ago",
        category: ["Computer repair and Maintenance"],
        topicTitle: "Join a Tech Company",
        description:
            "Brass is looking for student volunteers to join their company. If you’re a developer or designer interested in expanding your knowledge, you can apply with this link.",
        emoji: "/assets/svg/heartemoji.svg",
        peopleReaction: "Takon Ajie and 14 others",
        peopleComment: "23 Comments",
    },
    {
        id: 2,
        profilePix: "/assets/svg/profilepix.svg",
        name: "Maryann Ereh",
        time: "54 mins ago",
        category: ["Computer repair and Maintenance"],
        topicTitle: "Tech Hangout",
        description:
            "A friend is organizing a hangout for developers and we’re all invited. It’s a great opportunity to meet mentors and just fellow colleagues. Send me message if you’re interested.",
        emoji: "/assets/svg/heartemoji.svg",
        peopleReaction: "Takon Ajie and 14 others",
        peopleComment: "23 Comments",
    },
];

const Maintenance = () => {
    const [clicked, setClicked] = useState("");
    const [clickedComment, setClickedComment] = useState("");

    return (
        <PostsDataContainer>
            {maintenanceData.length !== 0 ? (
                maintenanceData.map((post, index) => (
                    <div key={post.id}>
                        <HomeItemContainer>
                            <div className="post-container">
                                <PostsDataHeader>
                                    <img src={post.profilePix} alt="profile-pix" />
                                    <PostName className="name">
                                        <div>
                                            <h5 className="post-name-title">{post.name}</h5>
                                            <p className="post-name-time">
                                                {post.time} &nbsp; &nbsp;
                                                {post.category.map((category, idx) => (
                                                    <span key={idx}>{category}</span>
                                                ))}
                                            </p>
                                        </div>
                                        <div
                                            className="save-icon"
                                            onClick={() =>
                                                setClicked((prevState) =>
                                                    prevState === post.id ? "" : post.id
                                                )
                                            }
                                        >
                                            {clicked === post.id ? (
                                                <img src="/assets/svg/savedTopic.svg" alt="save-icon" />
                                            ) : (
                                                <img src="/assets/svg/saveicon.svg" alt="save-icon" />
                                            )}
                                            {clicked === post.id && <Popup key={index} />}
                                        </div>
                                    </PostName>
                                </PostsDataHeader>
                                <PostBody className="post-body">
                                    <div>
                                        <Link href={`https://www.google.com/search?q=${post.topicTitle}`} replace>
                                            <a>
                                                <h6>{post.topicTitle}</h6>
                                            </a>
                                        </Link>
                                        <p>{post.description}</p>
                                        {post.postImage && (
                                            <Image
                                                src={post.postImage}
                                                alt="post-image"
                                                width="100%"
                                                height="60%"
                                                layout="responsive"
                                                objectFit="contain"
                                            />
                                        )}
                                    </div>
                                    <BottomDiv
                                        className="reactions PostsDataContainer__margin-class"
                                        style={{
                                            borderBottom: "1px solid #ECECEC",
                                        }}
                                    >
                                        <div className="emoji-reaction PostsDataContainer__margin-class">
                                            <img src={post.emoji} alt="emoji" /> &nbsp;&nbsp;
                                            <span>{post.peopleReaction}</span>
                                        </div>
                                        <div>
                                            <p className="bottom-div_text-right ">
                                                {post.peopleComment}
                                            </p>
                                        </div>
                                    </BottomDiv>
                                    <BottomDiv className="like-comment-container PostsDataContainer__margin-class">
                                        <p className="bottom-div_text-blue">Like</p>
                                        <p className="bottom-div_text-blue" onClick={() =>
                                            setClickedComment((prevState) =>
                                                prevState === post.id ? "" : post.id
                                            )
                                        }>Comment</p>
                                    </BottomDiv>
                                </PostBody>
                            </div>
                        </HomeItemContainer>
                        {clickedComment === post.id && <Comments currentUserId="1" />}
                    </div>
                ))
            ) : (
                <EmptyState
                    text={`No topic on programming yet`}
                    para={`Posts on programming will appear here`}
                />
            )}
        </PostsDataContainer>
    );
};

export default Maintenance;
