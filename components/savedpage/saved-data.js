/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from "react";
import Link from "next/link";
import EmptyState from "../empty-state/empty-state";
import Comments from "../common/comment/comments";
import { useUser } from "../../helper/get-user";
import { toast } from "react-hot-toast";
import Moment from "react-moment";
import Spinner from "../common/spinner/spinner";
import { makeApiCall } from "../../lib/api";
import {
  SavedDataContainer,
  HomeItemContainer,
  SavedDataHeader,
  SavedName,
  PostBody,
  BottomDiv,
} from "./savedTopicStyles";

const SaveData = () => {
  const [clicked, setClicked] = useState(false);
  const [clickedComment, setClickedComment] = useState("");
  const [loading, setLoading] = useState(true);
  const [getTopics, setGetTopics] = useState([]);
  const [updatePost, setUpdatePost] = useState(false);
  const [liked, setLiked] = useState(false);
  const [likedId, setLikedId] = useState(null);
  const user = useUser();

  useEffect(() => {
    // make a GET request to retrieve data from the API endpoint
    const fetchData = makeApiCall(`/getsavePost`)
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
  }, [updatePost, clicked]);

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

  const handleSavePost = async (item) => {
    const response = await makeApiCall("/savePost", "POST", {
      topicId: item,
    });
    if (response.message !== "unsave") {
      setClicked(true);
      toast.success(response.message);
      return;
    }
    if (response.message !== "saved") {
      setClicked(true);
      toast.success(response.message);
      return;
    }
  };

  return (
    <SavedDataContainer>
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
          text={`No Saved post yet`}
          para={`Posts you save will appear here`}
        />
      ) : (
        getTopics !== [] &&
        getTopics.map((post) => (
          <div key={post._id}>
            <HomeItemContainer>
              <div className="post-container">
                <SavedDataHeader>
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
                  <SavedName className="name">
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
                        <span>{post?.topicId?.category}</span>
                      </p>
                    </div>
                    <div
                      className="save-icon"
                      onClick={() => handleSavePost(post?.topicId?._id)}
                    >
                      <img src="/assets/svg/savedTopic.svg" alt="save-icon" />
                    </div>
                  </SavedName>
                </SavedDataHeader>
                <PostBody className="post-body">
                  <div>
                    <Link
                      href={`https://www.google.com/search?q=${post?.topicId?.topic}`}
                      replace
                    >
                      <a target={"_blank"}>
                        <h6 style={{ textTransform: "capitalize" }}>
                          {post?.topicId?.topic}
                        </h6>
                      </a>
                    </Link>
                    <p>{post?.topicId?.description}</p>
                    {post?.topicId?.image ? (
                      <img
                        style={{
                          marginTop: "10px",
                          width: "100%",
                          height: "200px",
                          objectFit: "cover",
                        }}
                        src={post?.topicId?.image}
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
                        {post?.topicId?.topic}
                      </div>
                    )}
                  </div>
                  <BottomDiv
                    className="reactions SavedDataContainer__margin-class"
                    style={{
                      borderBottom: "1px solid #ECECEC",
                    }}
                  >
                    <div className="emoji-reaction SavedDataContainer__margin-class">
                      {(liked && likedId === post?._id) ||
                      post?.topicId?.reaction?.length > 0
                        ? "❤️"
                        : ""}
                      &nbsp;&nbsp;
                      <span>
                        {(liked && likedId === post?._id) ||
                        post?.topicId?.reaction?.length > 0
                          ? `You, and ${
                              post?.topicId?.reaction_count || 0
                            } others`
                          : `liked by ${
                              post?.topicId?.reaction_count || 0
                            } people`}
                      </span>
                    </div>

                    <div>
                      <p className="bottom-div_text-right ">
                        {post?.topicId?.comment_count
                          ? `${post?.topicId?.comment_count} comment`
                          : "0 comment"}
                      </p>
                    </div>
                  </BottomDiv>

                  <BottomDiv className="like-comment-container SavedDataContainer__margin-class">
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
            {clickedComment === post._id && (
              <Comments
                commentUserto={post?.user?._id}
                topicId={post?.topicId?._id}
                postComments={post?.topicId?.comment}
                currentUserId={user?._id}
                setUpdatePost={setUpdatePost}
                updatePost={updatePost}
              />
            )}
          </div>
        ))
      )}
    </SavedDataContainer>
  );
};

export default SaveData;
