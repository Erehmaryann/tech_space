/* eslint-disable @next/next/no-img-element */
const postsData = [
    {
        id: 1,
        profilePix: "/assets/svg/profilepix.svg",
        name: "Maryann Ereh",
        time: "54 mins ago",
        category: "Phone and Technology",
        saveIcon: "/assets/svg/saveicon.svg",
        postImage: "/assets/svg/laptop.svg",
        topicTitle: "New Ipad!",
        description: "Everyone’s talking about the new Ipad. What new features do you guys like? It’s definitely the OS for me.",
        emoji: "/assets/svg/heartemoji.svg",
        peopleReaction: "Takon Ajie and 14 others",
        peopleComment: "23 Comments",
        comment: "Comment",
        like: "Like",
    }
];

const PostsData = () => {
    return (
        <div>
            {postsData.map(post => (
                <div className="post-container" key={post.id}>
                    <div className="">
                        <div className="post-info">
                            <img src={post.profilePix} alt="profile-pix" />
                            <div className="name">
                                <h5>{post.name}</h5>
                                <p>
                                    {post.time}
                                    <ul><li>{post.category}</li></ul>
                                </p>
                            </div>
                        </div>
                        <div className="save-icon">
                            <img src={post.saveIcon} alt="save-icon" />
                        </div>
                    </div>
                    <div className="post-body">
                        <h6>{post.topicTitle}</h6>
                        <p>{post.description}</p>
                        {
                            post.postImage && <img src={post.postImage} alt="post-image" />
                        }
                    </div>
                    <div className="reactions">
                        <div className="emoji-reaction">
                            <img src={post.emoji} alt="emoji" />
                            <ul>
                                <li>{post.peopleReaction}</li>
                            </ul>
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

export default PostsData;
