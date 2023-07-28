import { Link } from "react-router-dom";

import "./Login.css";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
const Login = () => {
  const { login } = useContext(AuthContext);

  const handlelogin = () => {
    login();
  };

  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Hello World.</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <span>Don't have an account ?</span>
          <Link to={"/rigester"}>
            <button>Rigister</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input type="text" placeholder="User Name" />
            <input type="password" placeholder="Password" />
            <button onClick={handlelogin}>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Login;
