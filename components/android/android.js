/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import EmptyState from "../empty-state/empty-state";
import Popup from "../popup/popup";

const androidData = [
    {
        id: 2,
        profilePix: "/assets/svg/profilepix.svg",
        name: "Maryann Ereh",
        time: "54 mins ago",
        category: ["Android/IOS"],
        topicTitle: "Tech Hangout",
        description:
            "A friend is organizing a hangout for developers and we’re all invited. It’s a great opportunity to meet mentors and just fellow colleagues. Send me message if you’re interested.",
        emoji: "/assets/svg/heartemoji.svg",
        peopleReaction: "Takon Ajie and 14 others",
        peopleComment: "23 Comments",
    },
    {
        id: 1,
        profilePix: "/assets/svg/profilepix.svg",
        name: "Maryann Ereh",
        time: "54 mins ago",
        category: ["Android/IOS"],
        topicTitle: "Join a Tech Company",
        description:
            "Brass is looking for student volunteers to join their company. If you’re a developer or designer interested in expanding your knowledge, you can apply with this link.",
        emoji: "/assets/svg/heartemoji.svg",
        peopleReaction: "Takon Ajie and 14 others",
        peopleComment: "23 Comments",
    },
];

const Android = () => {
    const [clicked, setClicked] = useState("");

    return (
        <PostsDataContainer>
            {androidData.length !== 0 ? (
                androidData.map((post, index) => (
                    <HomeItemContainer key={post.id}>
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
                                    <p className="bottom-div_text-blue">Comment</p>
                                </BottomDiv>
                            </PostBody>
                        </div>
                    </HomeItemContainer>
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

const PostsDataContainer = styled.main`
  width: 100%;
  height: 100%;
  padding: 20px;

  h5,
  h6,
  p {
    margin: 0;
    padding: 0;
  }
  .PostsDataContainer__margin-class {
    margin: 10px 0;
  }
`;

const HomeItemContainer = styled.section`
  margin: 16px 0;
  background: white;
  padding: 20px;
  box-sizing: border-box;
  border-radius: 10px;
`;

const PostsDataHeader = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  justify-content: space-between;
  align-items: center;
`;

const PostName = styled.div`
  display: flex;
  width: 91%;
  justify-content: space-between;
  align-items: center;

  .post-name-title {
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    color: #374956;
    margin: 5px 0;
  }
  .post-name-time {
    font-style: normal;
    font-weight: normal;
    font-size: 10px;
    line-height: 15px;
    color: #c4c4c4;
    & span {
      &::before {
        content: "•";
        padding-left: 4px;
      }
    }
  }
  .save-icon {
    cursor: pointer;
    position: relative;
  }
`;

const PostBody = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: flex-end;
  align-items: flex-end;
  margin-top: 10px;

  div {
    width: 91%;
  }

  h6 {
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 19px;
    color: #374956;
    &:hover {
      color: #0095f6;
    }
  }

  p {
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 18px;
    color: #374956;
  }
`;

const BottomDiv = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width; 100%;
span {
    font-style: normal;
font-weight: normal;
font-size: 10px;
line-height: 15px;
color: #C4C4C4;
}
.bottom-div_text-right {
    text-align: right;
}
.bottom-div_text-blue {
    color: #409DE0;

}
p{
    font-style: normal;
font-weight: normal;
font-size: 10px;
line-height: 15px;
color: #C4C4C4;
width: auto;
justify-self: flex-end;
}
`;
export default Android;
