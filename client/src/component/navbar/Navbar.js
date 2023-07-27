import "./Navbar.css";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import NightlightOutlinedIcon from "@mui/icons-material/NightlightOutlined";
import WidgetsOutlinedIcon from "@mui/icons-material/WidgetsOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { Link } from "react-router-dom";
import "../../style.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-left">
        <Link
          to={"/"}
          style={{
            textDecoration: "none",
            fontWeight: "bold",
            fontSize: "26px",
          }}
        >
          <span>Lama social</span>
        </Link>
        <HomeOutlinedIcon />
        <NightlightOutlinedIcon />
        <WidgetsOutlinedIcon />
        <div className="search">
          <SearchOutlinedIcon />
          <input placeholder="Search" />
        </div>
      </div>
      <div className="nav-right">
        <PersonOutlineOutlinedIcon />
        <EmailOutlinedIcon />
        <NotificationsOutlinedIcon />
        <div className="user">
          <img
            src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="person"
          />
          <span>Balaji</span>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
