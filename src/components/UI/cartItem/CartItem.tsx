import axios from "axios";

import { useSelector } from "react-redux";
import { RootState } from "../../../redux/Types";

import "../../../sass/CartItem.scss";

export default function CartItem(props: any) {
  const { imageUrl, productName, price, quantity, _id } = props.item;

  // Seems like in cartPage if refresh it cannot get the email from redux
  const email = useSelector((state: RootState) => state.email)

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
      .then(res => console.log(res))
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
