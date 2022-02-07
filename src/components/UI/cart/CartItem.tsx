import axios from "axios";
import Cookies from "js-cookie";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import "../../../sass/CartItem.scss";

export default function CartItem(props: any) {
  const jwt: any = Cookies.get("jwt");
  // let quantity: number = props.item.quantity;
  const { imageUrl, productName, price, quantity, _id } = props.item;
  const singlePrice = price / quantity;
  const cartItems = props.cartItems;
  const [totalPrice, setTotalPrice] = useState(price);
  const [email, setEmail] = useState("");

  useEffect(() => {
    async function getUserEmail() {
      if (!jwt) throw new Error("jwt is not found in cookies!");
      const res: any = await axios(
        "https://fierce-spring-store-backend.herokuapp.com/api/user/me",
        {
          headers: { "x-auth-token": jwt },
        }
      );
      return res.data.email;
    }

    getUserEmail().then((data) => setEmail(data));
    // cleanup function to prevent
    // "Can't perform a React state update on an unmounted component" Error
    return () => {
      setEmail("");
    };
  }, [jwt]);

  const changeQuantityHandler = (event: any) => {
    // TODO: Enable user to change the cart item quantity
    const newCartItems = cartItems.map((item: any) => {
      // check if the item id is the right one user is finding
      if (item._id === _id) {
        axios({
          url: "https://fierce-spring-store-backend.herokuapp.com/api/user/cart/modify",
          method: "PATCH",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json;charset=UTF-8",
          },
          data: {
            email,
            itemId: _id,
            quantity: event.target.value,
          },
        })
          .then((res) => {
            setTotalPrice(res.data.price);
          })
          .catch((Error) => console.log(Error));
        
        // quantity for dropdown UI and to update UI correctly you must use "event.target.value"
        return { ...item, quantity: event.target.value, price: singlePrice*event.target.value };
      }

      return item;
    });

    props.setCartItems(newCartItems);
  };

  const removeCartItemHandler = () => {
    axios({
      url: "https://fierce-spring-store-backend.herokuapp.com/api/user/cart/delete",
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
      data: {
        email,
        itemId: _id,
      },
    })
      .then((res) =>
        props.setCartItems(
          cartItems.filter((item: any) => item._id !== res.data._id)
        )
      )
      .catch((err) => console.log(err));
  };

  return (
    <div className="cartItem-container">
      <img src={imageUrl} alt={productName} className="cartItem-image" />
      <div className="cartItem-name-container">
        <p className="cartItem-name">{productName}</p>
      </div>
      {/* Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>. */}
      <select
        value={quantity}
        onChange={changeQuantityHandler}
        className="cartItem-quantity"
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>
      <p className="cartItem-total">Total: €{totalPrice.toFixed(2)}</p>
      <FontAwesomeIcon
        icon={faTimes}
        className="cartItem-delete"
        onClick={removeCartItemHandler}
      />
    </div>
  );
}
