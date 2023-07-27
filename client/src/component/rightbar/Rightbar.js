import "./Rightbar.css";
const Rightbar = () => {
  return (
    <div className="rightbar">
      <div className="container">
        <div className="rightbar-items">
          <span>Suggested for you</span>

          <div className="">
            <div className="rightbar-user">
              <div className="rightbar-userinfo">
                <img
                  src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt="person"
                />
                <span>Balaji</span>
              </div>
              <div className="rightbar-buttons">
                <button className="follow-btn">follow</button>
                <button className="dismiss-btn">dismiss</button>
              </div>
            </div>
            <div className="rightbar-user">
              <div className="rightbar-userinfo">
                <img
                  src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt="person"
                />
                <span>Balaji</span>
              </div>
              <div className="rightbar-buttons">
                <button className="follow-btn">follow</button>
                <button className="dismiss-btn">dismiss</button>
              </div>
            </div>
          </div>
        </div>
        <div className="rightbar-items">
          <span>Latest Activits</span>
          <div className="rightbar-user">
            <div className="rightbar-userinfo">
              <img
                src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="person"
              />
              <p>
                <span>Balaji</span> Changed the cover picture
              </p>
            </div>
            <div>
              <span>1 min ago</span>
            </div>
          </div>
          <div className="rightbar-user">
            <div className="rightbar-userinfo">
              <img
                src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="person"
              />
              <p>
                <span>Balaji</span> Changed the cover picture
              </p>
            </div>
            <div>
              <span>1 min ago</span>
            </div>
          </div>
          <div className="rightbar-user">
            <div className="rightbar-userinfo">
              <img
                src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="person"
              />
              <p>
                <span>Balaji</span> Changed the cover picture
              </p>
            </div>
            <div>
              <span>1 min ago</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Rightbar;
