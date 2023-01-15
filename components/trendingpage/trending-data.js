/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import EmptyState from "../empty-state/empty-state";
import Comments from "../common/comment/comments";
import {
  TrendDataContainer,
  HomeItemContainer,
  TrendDataHeader,
  TrendName,
  PostBody,
  BottomDiv,
} from "./trendingTopicStyles";
import { trendingData } from "./trendingTopicData";
import Popup from "../popup/popup";

const TrendData = () => {
  const [clicked, setClicked] = useState("");
  const [clickedComment, setClickedComment] = useState("");

  return (
    <TrendDataContainer>
      <h2 style={{ color: "#374956" }}>Trending Posts</h2>
      {trendingData.length !== 0 ? (
        trendingData.map((post) => (
          <div key={post.id}>
            <HomeItemContainer>
              <div className="post-container">
                <TrendDataHeader>
                  <img src={post.profilePix} alt="profile-pix" />
                  <TrendName className="name">
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
                  </TrendName>
                </TrendDataHeader>
                <PostBody className="post-body">
                  <div>
                    <Link
                      href={`https://www.google.com/search?q=${post.topicTitle}`}
                      replace
                    >
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
                    className="reactions TrendDataContainer__margin-class"
                    style={{ borderBottom: "1px solid #ECECEC" }}
                  >
                    <div className="emoji-reaction TrendDataContainer__margin-class">
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
                    <p
                      className="bottom-div_text-blue"
                      onClick={() =>
                        setClickedComment((prevState) =>
                          prevState === post.id ? "" : post.id
                        )
                      }
                    >
                      Comment
                    </p>
                  </BottomDiv>
                </PostBody>
              </div>
            </HomeItemContainer>
            {clickedComment === post.id && <Comments currentUserId="1" />}
          </div>
        ))
      ) : (
        <EmptyState
          text={`No trending topic yet`}
          para={`Trending topics will appear here`}
        />
      )}
    </TrendDataContainer>
  );
};

export default TrendData;
