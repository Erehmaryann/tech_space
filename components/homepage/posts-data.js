/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import EmptyState from "../empty-state/empty-state";
import Comments from "../common/comment/comments";
import Popup from "../popup/popup";
import { postsData } from "./data";
import Emojis from "../emoji/emoji";
import { Emoji } from "emoji-mart";
import {
  PostsDataContainer,
  HomeItemContainer,
  PostsDataHeader,
  PostName,
  PostBody,
  BottomDiv,
} from "./postsDataStyles";

const PostsData = () => {
  const [clicked, setClicked] = useState("");
  const [clickedComment, setClickedComment] = useState("");
  const [reactionShown, setReactionShown] = useState("");
  const [selectedEmoji, setSelectedEmoji] = useState([]);
  const [total, setTotal] = useState([]);

  return (
    <PostsDataContainer>
      {postsData.length !== 0 ? (
        postsData.map((post, index) => (
          <div key={index}>
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
                    {reactionShown === post.id && (
                      <div className="emoji-reaction PostsDataContainer__margin-class">
                        {selectedEmoji.map((emoji) => (
                          <Emoji emoji={emoji} size={16} key={emoji.id} />
                        ))}
                        &nbsp;&nbsp;
                        <span>{post.peopleReaction} and </span>
                        <span>{total.length} others</span>
                      </div>
                    )}
                    <div>
                      <p className="bottom-div_text-right ">
                        {post.peopleComment}
                      </p>
                    </div>
                  </BottomDiv>
                  {reactionShown === post.id && (
                    <Emojis
                      setSelectedEmoji={setSelectedEmoji}
                      selectedEmoji={selectedEmoji}
                      total={total}
                      setTotal={setTotal}
                    />
                  )}
                  <BottomDiv className="like-comment-container PostsDataContainer__margin-class">
                    <p
                      className="bottom-div_text-blue"
                      onClick={() =>
                        setReactionShown((prevState) =>
                          prevState === post.id ? "" : post.id
                        )
                      }
                      tabIndex="0"
                    >
                      Like
                    </p>
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
          text={`No post yet`}
          para={`Posts you and other users create will appear here`}
        />
      )}
    </PostsDataContainer>
  );
};

export default PostsData;
