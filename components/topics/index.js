import { useState, useEffect } from "react";
import EmptyState from "../empty-state/empty-state";
import Comments from "../common/comment/comments";

import { useUser } from "../../helper/get-user";
import Spinner from "../common/spinner/spinner";
import { toast } from "react-hot-toast";
import { makeApiCall } from "../../lib/api";

import { PostsDataContainer } from "./topicStyles";
import HomeContainer from "./home-container";

const Topic = () => {
  const [clickedComment, setClickedComment] = useState("");
  const [loading, setLoading] = useState(true);
  const [getTopics, setGetTopics] = useState([]);
  const user = useUser();

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
  }, [user?.role]);

  return (
    <PostsDataContainer>
      <h2>Topics</h2>

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
          text={`No topic have been approved yet`}
          para={`Approved topics will appear here`}
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
              />
            )}
          </div>
        ))
      )}
    </PostsDataContainer>
  );
};

export default Topic;
