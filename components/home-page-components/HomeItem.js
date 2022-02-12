import React from "react";
import Image from "next/image";
import { postsData } from "./postsData";

const HomeItem = () => {
  return (
    <div>
      {postsData.map((post) => (
        <div className="post-container" key={post.id}>
          <div className="">
            <div className="post-info">
              <Image src={post.profilePix} alt="profile-pix" layout="fill" />
              <div className="name">
                <h5>{post.name}</h5>
                <p>
                  {post.time}
                  {post.category.map((category, idx) => (
                    <span key={idx}>{category}</span>
                  ))}
                </p>
              </div>
            </div>
            <div className="save-icon">
              <Image src={post.saveIcon} alt="save-icon" />
            </div>
          </div>
          <div className="post-body">
            <h6>{post.topicTitle}</h6>
            <p>{post.description}</p>
            {post.postImage && (
              <Image src={post.postImage} alt="post-image" layout="fill" />
            )}
          </div>
          <div className="reactions">
            <div className="emoji-reaction">
              <Image src={post.emoji} alt="emoji" layout="fill" />
              <span>{post.peopleReaction}</span>
            </div>
            <p>{post.peopleComment}</p>
          </div>
          <div className="like-comment-container">
            <p>{post.like}</p>
            <p>{post.comment}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomeItem;
