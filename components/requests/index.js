/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from "react";
import { useUser } from "../../helper/get-user";
import Link from "next/link";
import { toast } from "react-hot-toast";
import EmptyState from "../empty-state/empty-state";
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
import Moment from "react-moment";
import Spinner from "../common/spinner/spinner";

const Request = () => {
  const user = useUser();
  const [loading, setLoading] = useState(true);
  const [getTopics, setGetTopics] = useState([]);
  const [isApproved, setIsApproved] = useState(false);

  useEffect(() => {
    // make a GET request to retrieve data from the API endpoint
    const fetchData = makeApiCall(`/getTopics/${user?.role}`)
      .then((responseData) => {
        if (responseData.message !== "no post available yet") {
          setGetTopics(responseData?.message);
          setLoading(false);
        } else {
          setGetTopics([]);
          setLoading(false);
        }
      })
      .catch((error) => {
        toast.error(error);
        setLoading(false);
      });

    fetchData;
  }, [user?.role, isApproved, getTopics]);

  const handleClick = async (item, value) => {
    const response = await makeApiCall(`updatestatus/${item?._id}`, "PATCH", {
      status: value,
    });
    setIsApproved(true);
    toast.success(response?.message);
  };
  return (
    <PostsDataContainer>
      <h2 style={{ color: "#374956" }}>Requests</h2>
      {loading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <Spinner color="#409de0" />
        </div>
      ) : getTopics?.length == 0 ? (
        <EmptyState
          text={`No topic has been created yet`}
          para={`Topics sent for approval will appear here`}
        />
      ) : (
        getTopics !== [] &&
        getTopics.map((post) => (
          <div key={post._id}>
            <HomeItemContainer>
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
                  </PostName>
                </PostsDataHeader>
                <PostBody className="post-body">
                  <div>
                    <Link
                      href={`https://www.google.com/search?q=${post?.topic}`}
                      replace
                    >
                      <a target={"_blank"}>
                        <h6 style={{ textTransform: "capitalize" }}>
                          {post?.topic}
                        </h6>
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
                  {post?.status === "PENDING" ? (
                    <BottomDiv>
                      <Button
                        className="first-btn"
                        value={"APPROVED"}
                        onClick={() => handleClick(post, "APPROVED")}
                      >
                        {loading ? <Spinner color="#409de0" /> : " Approve"}
                      </Button>
                      &nbsp; &nbsp;
                      <Button
                        className="sec-btn"
                        value={"REJECT"}
                        onClick={() => handleClick(post, "REJECT")}
                      >
                        {loading ? <Spinner color="#409de0" /> : "Decline"}
                      </Button>
                    </BottomDiv>
                  ) : (
                    ""
                  )}
                </PostBody>
              </div>
            </HomeItemContainer>
          </div>
        ))
      )}
    </PostsDataContainer>
  );
};

export default Request;
