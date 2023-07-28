import Post from "../post/Post";
import "./Posts.css";
const Posts = () => {
  const posts = [
    {
      id: 1,
      name: "balaji",
      userID: 1,
      profilePic:
        "https://images.unsplash.com/photo-1575516092328-522b5e8d3ec7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      desc: "I am updating the new one so like the post and command",
      img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 2,
      name: "balaji",
      userID: 1,
      profilePic:
        "https://images.unsplash.com/photo-1575516092328-522b5e8d3ec7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
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
