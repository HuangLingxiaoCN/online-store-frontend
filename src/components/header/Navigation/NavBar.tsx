import { useState } from "react";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";

import Login from "./Login";
import Logout from "./Logout";
import Profile from "./Profile";
import Register from "./Register";
import "../../../sass/NavBar.scss";

export default function NavBar() {
  // To force this component rerender
  const [rerender, setRerender] = useState(false);

  let returnedComponent = Cookies.get("jwt") ? (
    <div className="navbar-container">
      <Logout setRerender={setRerender} rerender={rerender} />
      <Link to="/profile">
        <Profile />
      </Link>
    </div>
  ) : (
    <div className="navbar-container">
      <Link to="/login">
        <Login />
      </Link>
      <Register />
    </div>
  );

  return returnedComponent;
}
