import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";

import Login from "./Login";
import Logout from "./Logout";
import Profile from "./Profile";
import Register from "./Register";
import Cart from "./Cart";
import { RootState } from "../../../../redux/Types";

import "../../../../sass/NavBar.scss";

export default function NavBar({
  cartItemsQuantity,
  setCartItemsQuantity,
}: any) {
  const isLoggedIn = useSelector((state: RootState) => state.isLoggedIn);
  const userEmail = useSelector((state: RootState) => state.email);
  const [userName, setUserName] = useState("");
  const [listings, setListings] = useState([]);
  const [jwt, setJwt] = useState("");

  useEffect(() => {
    const jwt = Cookies.get("jwt");
    if (jwt) {
      setJwt(jwt);
      axios("https://fierce-spring-store-backend.herokuapp.com/api/user/me", {
        headers: { "x-auth-token": jwt },
      }).then((res) => {
        setUserName(res.data.name);
        setListings(res.data.listings);
      });
    }
  }, [jwt]);

  let returnedComponent = isLoggedIn ? (
    <div className="navbar-container">
      <Link to="/cart">
        <Cart cartItemsQuantity={cartItemsQuantity} />
      </Link>
      <Link to="/profile" state={{ userEmail, userName, listings }}>
        <Profile />
      </Link>
      <Logout setJwt={setJwt} />
    </div>
  ) : (
    <div className="navbar-container">
      <Link to="/login">
        <Login />
      </Link>
      {/* <Link to="/register"> */}
      <Link to="/register">
        <Register />
      </Link>
    </div>
  );

  return returnedComponent;
}
