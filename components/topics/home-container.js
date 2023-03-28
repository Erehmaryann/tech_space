/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { DeleteIcon } from "./icons";
import Moment from "react-moment";
import { makeApiCall } from "../../lib/api";
import { toast } from "react-hot-toast";

import {
  HomeItemContainer,
  PostsDataHeader,
  PostName,
  PostBody,
  BottomDiv,
} from "./topicStyles";

const HomeContainer = ({ post, setClickedComment }) => {
  const [liked, setLiked] = useState(false);
  const [likedId, setLikedId] = useState(null);
  const [isDeletePost, setIsDeletePost] = useState(false);

  const handleTopic = async (item) => {
    const response = await makeApiCall(`deletetopic/${item}`, "DELETE");

    if (response.message === "topic successfully deleted") {
      toast.success(response?.message);
      setIsDeletePost(true);
      return;
    } else {
      toast.error(response?.message);
    }
  };

  useEffect(() => {}, [isDeletePost]);

  const handleSubmitEmoji = async (item) => {
    const response = await makeApiCall("/reaction", "PATCH", {
      topicId: item,
      emojiname: "love",
    });
    if (response.message !== "reacted") {
      toast.error("something went wrong");
      return;
    }
    setLiked(true);
    setLikedId(item);
  };

  return (
    <HomeItemContainer unsave={isDeletePost}>
      <div className="post-container">
        <PostsDataHeader>
          <img
            style={{
              width: "50px",
              height: "50px",
              borderRadius: "50%",
            }}
            id={post?.user?._id}
            src={
              post?.user?.profileimg
                ? post?.user?.profileimg
                : "/assets/svg/sideDp.svg"
            }
            alt="profile-pix"
          />
          <PostName className="name">
            <div>
              <h5
                className="post-name-title"
                style={{ textTransform: "capitalize" }}
              >
                {post?.user?.fullname}
              </h5>
              <p className="post-name-time">
                <Moment fromNow ago>
                  {post?.date}
                </Moment>
                &nbsp; &nbsp;
                <span>{post?.category}</span>
              </p>
            </div>

            <button
              className="save-icon"
              onClick={() => handleTopic(post?._id)}
            >
              <DeleteIcon />
            </button>
          </PostName>
        </PostsDataHeader>
        <PostBody className="post-body">
          <div>
            <Link
              href={`https://www.google.com/search?q=${post?.topic}`}
              replace
            >
              <a target={"_blank"}>
                <h6 style={{ textTransform: "capitalize" }}>{post?.topic}</h6>
              </a>
            </Link>
            <p>{post.description}</p>
            {post.image ? (
              <img
                style={{
                  marginTop: "10px",
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                }}
                src={post.image}
                alt="post-image"
              />
            ) : (
              <div
                style={{
                  width: "100%",
                  height: "150px",
                  objectFit: "cover",
                  background: "#409de0",
                  textShadow: "2px 2px #56C568",
                  marginTop: "10px",
                  display: "grid",
                  placeContent: "center",
                  textAlign: "center",
                  fontSize: "2rem",
                  color: "#fff",
                  borderRadius: "5px",
                }}
              >
                {post?.topic}
              </div>
            )}
          </div>
          <BottomDiv
            className="reactions PostsDataContainer__margin-class"
            style={{
              borderBottom: "1px solid #ECECEC",
            }}
          >
            <div className="emoji-reaction PostsDataContainer__margin-class">
              {(liked && likedId === post?._id) || post?.reaction?.length > 0
                ? "❤️"
                : ""}
              &nbsp;&nbsp;
              <span>
                {(liked && likedId === post?._id) || post?.reaction?.length > 0
                  ? `You, and ${post?.reaction_count || 0} others`
                  : `liked by ${post?.reaction_count || 0} people`}
              </span>
            </div>

            <div>
              <p className="bottom-div_text-right ">
                {post?.comment_count
                  ? `${post?.comment_count} comment`
                  : "0 comment"}
              </p>
            </div>
          </BottomDiv>

          <BottomDiv className="like-comment-container PostsDataContainer__margin-class">
            <p
              className="bottom-div_text-blue"
              onClick={() => handleSubmitEmoji(post._id)}
              tabIndex="0"
            >
              Like
            </p>
            <p
              className="bottom-div_text-blue"
              onClick={() =>
                setClickedComment((prevState) =>
                  prevState === post._id ? "" : post._id
                )
              }
            >
              Comment
            </p>
          </BottomDiv>
        </PostBody>
      </div>
    </HomeItemContainer>
  );
};

export default HomeContainer;
