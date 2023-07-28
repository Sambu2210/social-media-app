import Posts from "../../component/posts/Posts";
import Stories from "../../component/stories/Stories";
import "./Home.css";
const Home = () => {
  return (
    <div className="home">
      <div className="home-container">
        <Stories />
        <Posts />
      </div>
    </div>
  );
};
export default Home;
