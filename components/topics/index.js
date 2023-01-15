/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import EmptyState from "../empty-state/empty-state";
import Comments from "../common/comment/comments";
import { phoneData } from "../phone/phoneData";
import {
  PostsDataContainer,
  HomeItemContainer,
  PostsDataHeader,
  PostName,
  PostBody,
  BottomDiv,
} from "./topicStyles";
import Popup from "../popup/popup";
import { DeleteIcon } from "./icons";

const Topic = () => {
  const [clicked, setClicked] = useState("");
  const [clickedComment, setClickedComment] = useState("");

  return (
    <PostsDataContainer>
      <h2 style={{ color: "#374956" }}>Topics</h2>

      {phoneData.length !== 0 ? (
        phoneData.map((post, index) => (
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
                    <div className="save-icon">
                      <DeleteIcon />
                    </div>
                  </PostName>
                </PostsDataHeader>
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
                </PostBody>
              </div>
            </HomeItemContainer>
          </div>
        ))
      ) : (
        <EmptyState
          text={`No topic have been approved yet`}
          para={`Approved topics will appear here`}
        />
      )}
    </PostsDataContainer>
  );
};

export default Topic;
