/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from "react";
import EmptyState from "../empty-state/empty-state";
import Comments from "../common/comment/comments";
import { useUser } from "../../helper/get-user";
import { toast } from "react-hot-toast";
import Spinner from "../common/spinner/spinner";
import { makeApiCall } from "../../lib/api";
import { TrendDataContainer } from "./trendingTopicStyles";
import HomeContainer from "./comp";

const TrendData = () => {
  const [clickedComment, setClickedComment] = useState("");
  const [loading, setLoading] = useState(true);
  const [getTopics, setGetTopics] = useState([]);
  const [updatePost, setUpdatePost] = useState(false);
  const user = useUser();

  useEffect(() => {
    // make a GET request to retrieve data from the API endpoint
    const fetchData = makeApiCall(`/trendingTopic`)
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
  }, [user?.role, updatePost]);

  // const handleSubmitEmoji = async (item) => {
  //   const response = await makeApiCall("/reaction", "PATCH", {
  //     topicId: item,
  //     emojiname: "love",
  //   });
  //   if (response.message !== "reacted") {
  //     toast.error("something went wrong");
  //     return;
  //   }
  //   setLiked(true);
  //   setLikedId(item);
  // };

  return (
    <TrendDataContainer>
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
          text={`No post yet`}
          para={`Posts you and other users create will appear here`}
        />
      ) : (
        getTopics !== [] &&
        getTopics.map((post) => (
          <div key={post._id}>
            {/* <HomeItemContainer>
              <div className="post-container">
                <TrendDataHeader>
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
                  <TrendName className="name">
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
                    <div
                      className="save-icon"
                      onClick={() =>
                        setClicked((prevState) =>
                          prevState === post?._id ? "" : post?._id
                        )
                      }
                    >
                      {clicked === post?._id ? (
                        <img src="/assets/svg/savedTopic.svg" alt="save-icon" />
                      ) : (
                        <img src="/assets/svg/saveicon.svg" alt="save-icon" />
                      )}
                      {clicked === post?._id && <Popup key={post?._id} />}
                    </div>
                  </TrendName>
                </TrendDataHeader>
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
                  <BottomDiv
                    className="reactions TrendDataContainer__margin-class"
                    style={{
                      borderBottom: "1px solid #ECECEC",
                    }}
                  >
                    <div className="emoji-reaction TrendDataContainer__margin-class">
                      {(liked && likedId === post?._id) ||
                      post?.reaction?.length > 0
                        ? "❤️"
                        : ""}
                      &nbsp;&nbsp;
                      <span>
                        {(liked && likedId === post?._id) ||
                        post?.reaction?.length > 0
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

                  <BottomDiv className="like-comment-container TrendDataContainer__margin-class">
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
            </HomeItemContainer> */}
            <HomeContainer post={post} setClickedComment={setClickedComment} />
            {clickedComment === post._id && (
              <Comments
                commentUserto={post?.user?._id}
                topicId={post?._id}
                postComments={post?.comment}
                currentUserId={user?._id}
                setUpdatePost={setUpdatePost}
                updatePost={updatePost}
              />
            )}
          </div>
        ))
      )}
    </TrendDataContainer>
  );
};

export default TrendData;
