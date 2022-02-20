import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleLeft } from "@fortawesome/free-solid-svg-icons";

import CartList from "../components/cart/CartList";
import { Footer } from "../components/UI/footer/Footer";
import { RootState } from "../redux/Types";
import "../sass/ShoppingCart.scss";

export default function CartPage() {
  // For updating UI
  const [cartItems, setCartItems] = useState<any>([]);
  const [totalPrice, setTotal] = useState(0);
  const userEmail = useSelector((state: RootState) => state.email);
  const navigate = useNavigate();

  // Get user cart
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

  // calculate total price of cart
  useEffect(() => {
    let total = 0;
    cartItems.forEach((i: any) => {
      total += i.price;
    });
    setTotal(total);
  }, [cartItems]);

  const checkoutHandler = () => {
    axios
      .patch(
        "https://fierce-spring-store-backend.herokuapp.com/api/user/cart/clear",
        {
          email: userEmail,
        }
      )
      .catch((err) => console.error(err));
    navigate("/order", { state: cartItems });
  };

  return (
    <React.Fragment>
      {console.log(cartItems)}

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
        {cartItems.length === 0 && (
          <p className="cart-empty-message">There is no item in your cart. Add something from the store</p>
        )}
        {cartItems.length !== 0 && (
          <div>
            <div className="shopping-cart-totalPrice">
              <p>Total Price: €{totalPrice.toFixed(2)}</p>
            </div>
            <div className="shopping-cart-actions">
              <button
                className="cart-action-btn check-out"
                onClick={checkoutHandler}
              >
                Check Out
              </button>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </React.Fragment>
  );
}
