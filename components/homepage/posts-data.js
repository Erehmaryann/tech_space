/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from "react";
import { SearchDiv, NavInput, SearchIconDiv } from "../nav-bar/NavStyles";
import { SearchIcon } from "../Icons/Icon";
import EmptyState from "../empty-state/empty-state";
import Comments from "../common/comment/comments";
import { useUser } from "../../helper/get-user";
import { toast } from "react-hot-toast";
import Spinner from "../common/spinner/spinner";
import { makeApiCall } from "../../lib/api";
import { PostsDataContainer } from "./postsDataStyles";
import HomeContainer from "./comp";

const PostsData = () => {
  const [clickedComment, setClickedComment] = useState("");
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  const [getTopics, setGetTopics] = useState([]);
  const [updatePost, setUpdatePost] = useState(false);
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

    if (searchQuery !== "") {
      makeSearchRequest();
    }
  }, [user?.role, updatePost, searchQuery]);

  const makeSearchRequest = async () => {
    try {
      const response = await makeApiCall(`/search?search=${searchQuery}`);
      setGetTopics(response?.message);
    } catch (error) {
      toast.error(error);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    makeSearchRequest();
  };

  const onInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const onPress = (e) => {
    if (e.key === "Enter") {
      onSubmit(e);
      setSearchQuery("");
    }
  };

  return (
    <PostsDataContainer>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          width: "50%",
          height: "37px",
          marginTop: "30px",
        }}
      >
        <SearchDiv onSubmit={onSubmit}>
          <SearchIconDiv>
            <SearchIcon />
          </SearchIconDiv>
          <NavInput
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={onInputChange}
            onKeyDown={onPress}
          />
        </SearchDiv>
      </div>
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

export default PostsData;
