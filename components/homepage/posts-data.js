/* eslint-disable @next/next/no-img-element */
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

const postsData = [
  {
    id: 1,
    profilePix: "/assets/svg/profilepix.svg",
    name: "Maryann Ereh",
    time: "54 mins ago",
    category: ["Phone and Technology"],
    saveIcon: "/assets/svg/saveicon.svg",
    postImage: "/assets/laptop.png",
    topicTitle: "New Ipad!",
    description:
      "Everyone’s talking about the new Ipad. What new features do you guys like? It’s definitely the OS for me.",
    emoji: "/assets/svg/heartemoji.svg",
    peopleReaction: "Takon Ajie and 14 others",
    peopleComment: "23 Comments",
    comment: "Comment",
    like: "Like",
  },
  {
    id: 2,
    profilePix: "/assets/svg/profilepix.svg",
    name: "Maryann Ereh",
    time: "54 mins ago",
    category: ["Programming", "Networking"],
    saveIcon: "/assets/svg/saveicon.svg",
    topicTitle: "Faster PC",
    description:
      "You guyssss, i just installed a new RAM and my system is so much faster, it’s inasne. They’re also very cheap so if you need one you can just send me a message right now!",
    emoji: "/assets/svg/heartemoji.svg",
    peopleReaction: "Takon Ajie and 14 others",
    peopleComment: "23 Comments",
    comment: "Comment",
    like: "Like",
  },
];

const PostsData = () => {
  <Head>
    <title>Tech Space | Home</title>
  </Head>;
  return (
    <PostsDataContainer>
      {postsData.map((post) => (
        <HomeItemContainer key={post.id}>
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
                <div className="save-icon">
                  <img src={post.saveIcon} alt="save-icon" />
                </div>
              </PostName>
            </PostsDataHeader>
            <PostBody className="post-body">
              <div>
                <Link href="">
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
              <BottomDiv className="reactions PostsDataContainer__margin-class">
                <div className="emoji-reaction PostsDataContainer__margin-class">
                  <img src={post.emoji} alt="emoji" /> &nbsp;&nbsp;
                  <span>{post.peopleReaction}</span>
                </div>
                <div>
                  <p className="bottom-div_text-right ">{post.peopleComment}</p>
                </div>
              </BottomDiv>
              <BottomDiv className="like-comment-container PostsDataContainer__margin-class">
                <p className="bottom-div_text-blue">{post.like}</p>
                <p className="bottom-div_text-blue">{post.comment}</p>
              </BottomDiv>
            </PostBody>
          </div>
        </HomeItemContainer>
      ))}
    </PostsDataContainer>
  );
};

const HomeItemContainer = styled.section`
  /* width: 50%; */
  margin: 16px 0;
  background: white;
  padding: 20px;
  box-sizing: border-box;
  border-radius: 10px;
`;

const PostsDataContainer = styled.main`
  width: 100%;
  box-sizing: border-box;
  padding: 20px;

  h5,
  h6,
  p {
    margin: 0;
    padding: 0;
  }
  .PostsDataContainer__margin-class {
    margin: 10px 0;
  }
`;

const PostsDataHeader = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  justify-content: space-between;
  align-items: center;
`;

const PostName = styled.div`
  display: flex;
  width: 91%;
  justify-content: space-between;
  align-items: center;

  .post-name-title {
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    color: #374956;
    margin: 5px 0;
  }
  .post-name-time {
    font-style: normal;
    font-weight: normal;
    font-size: 10px;
    line-height: 15px;
    color: #c4c4c4;
    & span {
      &::before {
        content: "•";
        padding-left: 4px;
      }
    }
  }
  .save-icon {
    cursor: pointer;
  }
`;

const PostBody = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: flex-end;
  align-items: flex-end;
  margin-top: 10px;

  div {
    width: 91%;
  }

  h6 {
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 19px;
    color: #374956;
    &:hover {
      color: #0095f6;
    }
  }

  p {
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 18px;
    color: #374956;
  }
`;

const BottomDiv = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width; 100%;
span {
    font-style: normal;
font-weight: normal;
font-size: 10px;
line-height: 15px;
color: #C4C4C4;
}
.bottom-div_text-right {
    text-align: right;

}
.bottom-div_text-blue {
    color: #409DE0;

}
p{
    font-style: normal;
font-weight: normal;
font-size: 10px;
line-height: 15px;
color: #C4C4C4;
width: auto;
justify-self: flex-end;
}
`;
export default PostsData;
