/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from "react";
import { useUser } from "../../helper/get-user";
import Link from "next/link";
import Image from "next/image";
import EmptyState from "../empty-state/empty-state";
import { phoneData } from "../phone/phoneData";
import { makeApiCall } from "../../lib/api";
import {
  PostsDataContainer,
  HomeItemContainer,
  PostsDataHeader,
  PostName,
  PostBody,
  BottomDiv,
  Button,
} from "./requestStyles";

const Request = () => {
  const user = useUser();
  console.log(user, "Imeneeee");
  const [loading, setLoading] = useState(true);
  const [getTopics, setGetTopics] = useState([]);

  useEffect(() => {
    // make a GET request to retrieve data from the API endpoint
    makeApiCall(`/getTopics/${user?.role}`)
      .then((responseData) => {
        setGetTopics(responseData?.message);
        setLoading(false);
      })
      .catch((error) => {
        toast.error(error);
        setLoading(false);
      });
  }, []);
  console.log(getTopics, "heyyyyyy");
  return (
    <PostsDataContainer>
      <h2 style={{ color: "#374956" }}>Requests</h2>

      {phoneData.length !== 0 ? (
        phoneData.map((post) => (
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
                  <BottomDiv>
                    <Button className="first-btn">Approve</Button>
                    &nbsp; &nbsp;
                    <Button className="sec-btn">Decline</Button>
                  </BottomDiv>
                </PostBody>
              </div>
            </HomeItemContainer>
          </div>
        ))
      ) : (
        <EmptyState
          text={`No topic has been sent for approval yet`}
          para={`Topics sent for approval will appear here`}
        />
      )}
    </PostsDataContainer>
  );
};

export default Request;
