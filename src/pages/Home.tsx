import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import axios from "axios";

import Header from "../components/header/Header";
import { Footer } from "../components/footer/Footer";
import ItemList from "../components/body/ItemList";

export default function Home() {
  const [searchText, setSearchText] = useState<String>("");
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // If user is logged in and jwt is stored in cookie, get the cart items
    const jwt = Cookies.get("jwt");
    if (jwt) {
      axios("https://fierce-spring-store-backend.herokuapp.com/api/user/me", {
          headers: { "x-auth-token": jwt },
        })
        .then(res => {
          setCartItems(res.data.cart)
        })
        .catch((err) => console.log(err));
    }
  }, []);

  return (
    <>
      <div style={{ minHeight: "100vh" }}>
        <Header setSearchText={setSearchText} cartItems={cartItems} />
        <ItemList searchText={searchText} />
      </div>
      <Footer />
    </>
  );
}
