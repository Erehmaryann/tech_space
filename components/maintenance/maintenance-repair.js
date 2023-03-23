/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from "react";
import Link from "next/link";
import EmptyState from "../empty-state/empty-state";
import Comments from "../common/comment/comments";
import Popup from "../popup/popup";
import { useUser } from "../../helper/get-user";
import Moment from "react-moment";
import Spinner from "../common/spinner/spinner";
import { toast } from "react-hot-toast";
import { makeApiCall } from "../../lib/api";
import { PostsDataContainer } from "./maintenanceStyles";
import HomeContainer from "./comp";

const Maintenance = () => {
  const [clickedComment, setClickedComment] = useState("");
  const [loading, setLoading] = useState(true);
  const [getTopics, setGetTopics] = useState([]);
  const [updatePost, setUpdatePost] = useState(false);
  const user = useUser();

  useEffect(() => {
    // make a GET request to retrieve data from the API endpoint
    const fetchData = makeApiCall(`/getTopics/${user?.role}`)
      .then((responseData) => {
        if (responseData.message !== "no post available yet") {
          const maintenanceTopics = responseData.message.filter(
            (topic) => topic?.category === "computer repair and maintenace"
          );
          setGetTopics(maintenanceTopics);
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

  return (
    <PostsDataContainer>
      <h2 style={{ color: "#374956" }}>Computer Repair/Maintenance Topics</h2>

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
          text={`No topic on maintenance yet`}
          para={`Posts on maintenance will appear here`}
        />
      ) : (
        getTopics !== [] &&
        getTopics.map((post) => (
          <div key={post._id}>
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
    </PostsDataContainer>
  );
};

export default Maintenance;
