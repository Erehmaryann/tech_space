/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import EmptyState from "../empty-state/empty-state";
import Comments from "../common/comment/comments";
import {
  SavedDataContainer,
  HomeItemContainer,
  SavedDataHeader,
  SavedName,
  PostBody,
  BottomDiv,
} from "./savedTopicStyles";
import { savedTopicData } from "./data";

const SaveData = () => {
  const [clickedComment, setClickedComment] = useState("");

  return (
    <SavedDataContainer>
      <h2 style={{ color: "#374956" }}>Saved Topics</h2>
      {savedTopicData.length !== 0 ? (
        savedTopicData.map((post) => (
          <div key={post.id}>
            <HomeItemContainer>
              <div className="post-container">
                <SavedDataHeader>
                  <img src={post.profilePix} alt="profile-pix" />
                  <SavedName className="name">
                    <div>
                      <h5 className="post-name-title">{post.name}</h5>
                      <p className="post-name-time">
                        {post.time} &nbsp; &nbsp;
                        {post.category.map((category, idx) => (
                          <span key={idx}>{category}</span>
                        ))}
                      </p>
                    </div>
                    <div className="save-icon">
                      <img src={post.saveIcon} alt="save-icon" />
                    </div>
                  </SavedName>
                </SavedDataHeader>
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
                    className="reactions SavedDataContainer__margin-class"
                    style={{ borderBottom: "1px solid #ECECEC" }}
                  >
                    <div className="emoji-reaction SavedDataContainer__margin-class">
                      <img src={post.emoji} alt="emoji" /> &nbsp;&nbsp;
                      <span>{post.peopleReaction}</span>
                    </div>
                    <div>
                      <p className="bottom-div_text-right ">
                        {post.peopleComment}
                      </p>
                    </div>
                  </BottomDiv>
                  <BottomDiv className="like-comment-container SavedDataContainer__margin-class">
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
          text={`No saved topics yet`}
          para={`Topics you save will appear here`}
          key={index}
        />
      )}
    </SavedDataContainer>
  );
};

export default SaveData;
