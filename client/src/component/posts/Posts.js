import Post from "../post/Post";
import "./Posts.css";
const Posts = () => {
  const posts = [
    {
      id: 1,
      name: "balaji",
      userID: 1,
      profilePic:
        "https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600",
      des: "I am updating the new one so like the post and command",
      img: "https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      id: 2,
      name: "balaji",
      userID: 1,
      profilePic:
        "https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600",
      des: "I am updating the new one so like the post and command",
    },
  ];
  return (
    <div className="posts">
      {posts.map((post) => (
        <div className="post-content">
          <Post post={post} key={post.id} />
        </div>
      ))}
    </div>
  );
};
export default Posts;
