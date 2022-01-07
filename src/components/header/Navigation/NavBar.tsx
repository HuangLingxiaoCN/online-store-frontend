import { useState } from "react";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";

import Login from "./Login";
import Logout from "./Logout";
import Profile from "./Profile";
import Register from "./Register";
import Cart from "./Cart";
import "../../../sass/NavBar.scss";


export default function NavBar() {
  // To force this component rerender
  const [rerender, setRerender] = useState(false);

  let returnedComponent = Cookies.get("jwt") ? (
    <div className="navbar-container">
      <Link to="/cart">
        <Cart />
      </Link>
      <Link to="/profile">
        <Profile />
      </Link>
      <Logout setRerender={setRerender} rerender={rerender} />
    </div>
  ) : (
    <div className="navbar-container">
      <Link to="/login">
        <Login />
      </Link>
      <Link to="/register">
        <Register />
      </Link>
    </div>
  );

  return returnedComponent;
}
