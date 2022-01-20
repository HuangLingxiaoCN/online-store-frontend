import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Cookies from "js-cookie";
import axios from "axios";

import Header from "../components/header/Header";
import { Footer } from "../components/footer/Footer";
import ItemList from "../components/body/ItemList";
import { RootState } from "../redux/Types";

export default function Home() {
  const [items, setItems] = useState<any>([]);
  const [isLoading, setIsLoading] = useState<any>(true);
  const [hasError, setHasError] = useState<any>(false);

  const [searchText, setSearchText] = useState<String>("");
  const [cartItems, setCartItems] = useState([]);

  const isLoggedIn = useSelector((state: RootState) => state.isLoggedIn)

  useEffect(() => {
    axios("https://fierce-spring-store-backend.herokuapp.com/api/products")
      .then((res) => {
        setHasError(false);
        setIsLoading(false);
        setItems(res.data);
      })
      .catch((error) => {
        setHasError(true);
        setIsLoading(false);
        console.log(error);
      });
  }, []);

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
  }, [isLoggedIn]);

  return (
    <>
      <div style={{ minHeight: "100vh" }}>
        <Header setSearchText={setSearchText} cartItems={cartItems} />
        <ItemList searchText={searchText} items={items} isLoading={isLoading} hasError={hasError} />
      </div>
      <Footer />
    </>
  );
}
