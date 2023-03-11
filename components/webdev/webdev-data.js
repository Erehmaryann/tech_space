/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from "react";
import Link from "next/link";
import EmptyState from "../empty-state/empty-state";
import Comments from "../common/comment/comments";
import Popup from "../popup/popup";
import { useUser } from "../../helper/get-user";
import { toast } from "react-hot-toast";
import Moment from "react-moment";
import Spinner from "../common/spinner/spinner";
import { makeApiCall } from "../../lib/api";
import Emojis from "../emoji/emoji";
import { Emoji } from "emoji-mart";
import {
  PostsDataContainer,
  HomeItemContainer,
  PostsDataHeader,
  PostName,
  PostBody,
  BottomDiv,
} from "./webdevTopicStyles";

const WebdevData = () => {
  const [clicked, setClicked] = useState("");
  const [clickedComment, setClickedComment] = useState("");
  const [reactionShown, setReactionShown] = useState("");
  const [selectedEmoji, setSelectedEmoji] = useState([]);
  const [total, setTotal] = useState([]);
  const [loading, setLoading] = useState(true);
  const [getTopics, setGetTopics] = useState([]);
  const user = useUser();

  useEffect(() => {
    // make a GET request to retrieve data from the API endpoint
    const fetchData = makeApiCall(`/getTopics/${user?.role}`)
      .then((responseData) => {
        if (responseData.message !== "no post available yet") {
          const webDevTopics = responseData.message.filter(
            (topic) => topic?.category === "web development"
          );
          setGetTopics(webDevTopics);
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
  }, [user?.role]);

  return (
    <PostsDataContainer>
      <h2 style={{ color: "#374956" }}>Web Development Topics</h2>

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
          text={`No post on Web development yet`}
          para={`Posts on web development will appear here`}
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
                  <BottomDiv
                    className="reactions PostsDataContainer__margin-class"
                    style={{
                      borderBottom: "1px solid #ECECEC",
                    }}
                  >
                    {/* {reactionShown === post._id && ( */}
                    <div className="emoji-reaction PostsDataContainer__margin-class">
                      {selectedEmoji.map((emoji) => (
                        <Emoji emoji={emoji} size={16} key={emoji.id} />
                      ))}
                      &nbsp;&nbsp;
                      <span>{post?.reaction} and </span>
                      <span>{post?.reaction?.length} others</span>
                    </div>
                    {/* )} */}
                    <div>
                      <p className="bottom-div_text-right ">{`${post?.comment?.length} comment`}</p>
                    </div>
                  </BottomDiv>
                  {reactionShown === post._id && (
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
                          prevState === post._id ? "" : post._id
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
            {clickedComment === post._id && <Comments currentUserId="1" />}
          </div>
        ))
      )}
    </PostsDataContainer>
  );
};

export default WebdevData;
