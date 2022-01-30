import axios from "axios";
import Cookies from "js-cookie";

import { useState } from "react";

import "../../../sass/CartItem.scss";

export default function CartItem(props: any) {
  const jwt: any = Cookies.get("jwt");
  const { imageUrl, productName, price, quantity, _id } = props.item;
  const [email, setEmail] = useState("")

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

  getUserEmail().then(data => setEmail(data))

  const removeCartItemHandler = () => {
    // 
    axios({
      url: "https://fierce-spring-store-backend.herokuapp.com/api/user/cart/delete",
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
      data: {
        email,
        itemId: _id
      }
    })
      .then(res => { 
        console.log(res)
      })
      .catch(err => console.log(err))
  }

  return (
    <div className="cartItem-container">
      <img src={imageUrl} alt={productName} className="cartItem-image" />
      <p className="cartItem-name">{productName}</p>
      <select className="cartItem-quantity">
        <option selected>{quantity}</option>
        {quantity !== 1 && <option value="1">1</option>}
        {quantity !== 2 && <option value="2">2</option>}
        {quantity !== 3 && <option value="3">3</option>}
        {quantity !== 4 && <option value="4">4</option>}
        {quantity !== 5 && <option value="5">5</option>}
        {quantity !== 6 && <option value="6">6</option>}
        {quantity !== 7 && <option value="7">7</option>}
        {quantity !== 8 && <option value="8">8</option>}
        {quantity !== 9 && <option value="9">9</option>}
        {quantity !== 10 && <option value="10">10</option>}
      </select>
      <p className="cartItem-price">Price: €{price * quantity}</p>
      <button onClick={removeCartItemHandler}>Remove</button>
    </div>
  );
}
