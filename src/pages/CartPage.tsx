import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleLeft } from "@fortawesome/free-solid-svg-icons";

import CartList from "../components/UI/cart/CartList";
import "../sass/ShoppingCart.scss";
import { Footer } from "../components/footer/Footer";

export default function CartPage() {
  // For updating UI
  const [cartItems, setCartItems] = useState<any>([]);
  const [totalPrice, setTotal] = useState(0);
  const navigate = useNavigate();

  // Can't perform a React state update on an unmounted component.
  useEffect(() => {
    // get all cart items from the user
    const jwt: any = Cookies.get("jwt");
    axios("https://fierce-spring-store-backend.herokuapp.com/api/user/me", {
      headers: { "x-auth-token": jwt },
    })
      .then((res) => {
        setCartItems(res.data.cart);
      })
      .catch((err) => {
        console.log(err);
      });

    return () => {
      setCartItems([]);
    };
  }, []);

  useEffect(() => {
    let total = 0;
    cartItems.forEach((i: any) => {
      total += i.price;
    });
    setTotal(total);
  }, [cartItems]);

  return (
    <React.Fragment>
      <div className="shopping-cart-body">
        <button
          onClick={() => {
            navigate("/", { replace: true });
          }}
          className="back-to-home-btn"
        >
          <FontAwesomeIcon
            icon={faAngleDoubleLeft}
            style={{ marginRight: "5px" }}
          />
          Back to Home page
        </button>
        <div className="items-container">
          <h1>{cartItems.length} items in basket</h1>
          <CartList
            cartItems={cartItems}
            setCartItems={setCartItems}
            setTotal={setTotal}
          />
        </div>
        <div className="shopping-cart-totalPrice">
          <p>Total Price: €{totalPrice.toFixed(2)}</p>
        </div>
        <div className="shopping-cart-actions">
          <button className="cart-action-btn check-out" onClick={() => {
            navigate("/order", { state: cartItems });
          } }>Check Out</button>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}
