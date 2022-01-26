import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";

import Login from "./Login";
import Logout from "./Logout";
import Profile from "./Profile";
import Register from "./Register";
import Cart from "./Cart";
import "../../../sass/NavBar.scss";

export default function NavBar({cartItemsQuantity}: any) {
  const [jwt, setJwt] = useState('')

  useEffect(() => {
    const jwt = Cookies.get("jwt")
    if(jwt) {
      setJwt(jwt)
    }
  }, [])

  let returnedComponent = jwt ? (
    <div className="navbar-container">
      <Link to="/cart">
        <Cart cartItemsQuantity={cartItemsQuantity} />
      </Link>
      <Link to="/profile">
        <Profile />
      </Link>
      <Logout setJwt={setJwt} />
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
