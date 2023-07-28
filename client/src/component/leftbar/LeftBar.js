import "./LeftBar.css";
import friends from "../../assets/1.png";
import group from "../../assets/2.png";
import marketplace from "../../assets/3.png";
import watch from "../../assets/4.png";
import memories from "../../assets/5.png";
import event from "../../assets/6.png";
import gaming from "../../assets/7.png";
import gallary from "../../assets/8.png";
import videos from "../../assets/9.png";
import messages from "../../assets/10.png";
import tutorials from "../../assets/11.png";
import courses from "../../assets/12.png";
import fund from "../../assets/13.png";
import { AuthContext } from "../../context/authContext";
import { useContext } from "react";
const LeftBar = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="leftbar">
      <div className="container">
        <div className="menu">
          <div className="items">
            <img src={currentUser.profilePic} alt="person" />
            <span>{currentUser.name}</span>
          </div>
          <div className="items">
            <img src={friends} alt="" />
            <span>Friends</span>
          </div>
          <div className="items">
            <img src={group} alt="" />
            <span>Group</span>
          </div>
          <div className="items">
            <img src={marketplace} alt="" />
            <span>Marketplace</span>
          </div>
          <div className="items">
            <img src={watch} alt="" />
            <span>Watch</span>
          </div>
          <div className="items">
            <img src={memories} alt="" />
            <span>Memories</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Shortcuts</span>
          <div className="items">
            <div className="items">
              <img src={event} alt="" />
              <span>Event</span>
            </div>
          </div>
          <div className="items">
            <div className="items">
              <img src={gaming} alt="" />
              <span>Gaming</span>
            </div>
          </div>
          <div className="items">
            <div className="items">
              <img src={gallary} alt="" />
              <span>Gallary</span>
            </div>
          </div>
          <div className="items">
            <div className="items">
              <img src={videos} alt="" />
              <span>Videos</span>
            </div>
          </div>
          <div className="items">
            <div className="items">
              <img src={messages} alt="" />
              <span>Messages</span>
            </div>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Others</span>
          <div className="items">
            <div className="items">
              <img src={tutorials} alt="" />
              <span>Tutorials</span>
            </div>
          </div>
          <div className="items">
            <div className="items">
              <img src={courses} alt="" />
              <span>Courses</span>
            </div>
          </div>
          <div className="items">
            <div className="items">
              <img src={fund} alt="" />
              <span>Fund</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LeftBar;
