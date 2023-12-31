import "./App.css";
import LeftBar from "./component/leftbar/LeftBar";
import Navbar from "./component/navbar/Navbar";
import Rightbar from "./component/rightbar/Rightbar";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Profile from "./pages/profile/Profile";
import Home from "./pages/home/Home";
import "./style.css";
import {
  Navigate,
  Outlet,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { AuthContext } from "./context/authContext";

function App() {
  const { currentUser } = useContext(AuthContext);

  const { darkmode } = useContext(DarkModeContext);

  const Layout = () => {
    return (
      <div className={`theme-${darkmode ? "dark" : ""}`}>
        <Navbar />
        <div className="component">
          <LeftBar />
          <Outlet />
          <Rightbar />
        </div>
      </div>
    );
  };
  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to={"/login"} />;
    } else {
      return children;
    }
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        { path: "/", element: <Home /> },
        { path: "/profile", element: <Profile /> },
      ],
    },
    { path: "/login", element: <Login /> },
    { path: "/rigester", element: <Register /> },
  ]);
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
