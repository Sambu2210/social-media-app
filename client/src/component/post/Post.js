import "./Post.css";
import { Link } from "react-router-dom";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
const Post = ({ post }) => {
  return (
    <div className="post">
      <div className="post-container">
        <div className="user">
          <div className="userinfo">
            <img src={post.img} alt="" />
            <div className="detials">
              <Link to={`/porfile/${post.userID}`}></Link>
              <span className="name">{post.name}</span>
              <span className="date">1 min ago</span>
            </div>
          </div>
          <MoreHorizIcon />
        </div>
        <div className="content"></div>
        <div className="info"></div>
      </div>
    </div>
  );
};
export default Post;
