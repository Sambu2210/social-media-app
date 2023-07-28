import "./Navbar.css";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import NightlightOutlinedIcon from "@mui/icons-material/NightlightOutlined";
import WidgetsOutlinedIcon from "@mui/icons-material/WidgetsOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import { Link } from "react-router-dom";
import "../../style.css";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
const Navbar = () => {
  const { toggle, darkmode } = useContext(DarkModeContext);
  const { currentUser } = useContext(AuthContext);

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
        {darkmode ? (
          <WbSunnyIcon onClick={toggle} />
        ) : (
          <NightlightOutlinedIcon onClick={toggle} />
        )}
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
          <img src={currentUser.profilePic} alt="person" />
          <span>{currentUser.name}</span>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
