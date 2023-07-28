import "./Post.css";
import { Link } from "react-router-dom";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import InsertCommentIcon from "@mui/icons-material/InsertComment";
import ShareIcon from "@mui/icons-material/Share";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Comments from "../comments/Comments";
const Post = ({ post }) => {
  const liked = false;
  return (
    <div className="post">
      <div className="post-container">
        <div className="user">
          <div className="userinfo">
            <img src={post.profilePic} alt="" />
            <div className="detials">
              <Link to={`/porfile/${post.userID}`}></Link>
              <span className="name">{post.name}</span>
              <span className="date">1 min ago</span>
            </div>
          </div>
          <MoreHorizIcon />
        </div>
        <div className="content">
          <p>{post.desc}</p>
          <img src={post.img} alt="image" />
        </div>
        <div className="info">
          <div className="info-items">
            {liked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
            12 likes
          </div>
          <div className="info-items">
            <InsertCommentIcon />
            12 comments
          </div>
          <div className="info-items">
            <ShareIcon />
            share
          </div>
        </div>
        <Comments />
      </div>
    </div>
  );
};
export default Post;
