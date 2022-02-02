import axios from "axios";
import Cookies from "js-cookie";

import { useState } from "react";

import "../../../sass/CartItem.scss";

export default function CartItem(props: any) {
  const jwt: any = Cookies.get("jwt");
  const { imageUrl, productName, price, quantity, _id } = props.item;
  const cartItems = props.cartItems;
  const [email, setEmail] = useState("");

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

  const changeQuantityHandler = () => {
    // when user select a quantity, send an axios request to backend
  }

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
      <p className="cartItem-name">{productName}</p>
      {/* Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>. */}
      <select value={quantity} onChange={changeQuantityHandler} className="cartItem-quantity">
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
      <p className="cartItem-price">Price: €{price * quantity}</p>
      <button onClick={removeCartItemHandler}>Remove</button>
    </div>
  );
}
