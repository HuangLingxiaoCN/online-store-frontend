import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import Cookies from "js-cookie";

import "../../sass/Item.scss";
import { RootState } from "../../redux/Types";

export default function Item(props: any) {
  // _id is needed to get productId
  const { imageUrl, name, genre, price, description, _id } = props;
  const productId = _id;
  const isLoggedIn = useSelector((state: RootState) => state.isLoggedIn);
  const email = useSelector((state: RootState) => state.email);
  const navigate = useNavigate();

  const itemDetailHandler = () => {
    // passing props to detail page
    navigate("/detail", {
      state: { imageUrl, name, genre, price, description, productId, email },
    });
  };

  const addToCartHandler = () => {
    if (!isLoggedIn) {
      alert("Please fist log in");
    } else {
      const data = {
        email: email,
        productId
      };

      const jwt = Cookies.get("jwt");
      if (jwt !== undefined) {
        const config = {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json;charset=UTF-8",
            "x-auth-token": jwt,
          },
        };
        const url =
          "https://fierce-spring-store-backend.herokuapp.com/api/user/cart/add";

        axios
          .patch(url, data, config)
          .then(res => {
            // if props.cartItems alright has the item with same productId
            // then don't update UI
            let itemInCart = props.cartItems.find((i:any) => i.productId === res.data.productId);

            if(!itemInCart) {
              props.setCartItems([...props.cartItems, res.data]);
            }

          })
          .catch((error) => console.log(error));

      } else {
        throw new Error("JWT is not defined in cookies");
      }
    }
  };

  return (
    <div className="item-container">
      <img
        className="image"
        src={imageUrl}
        alt={name}
        onClick={itemDetailHandler}
      />
      <div className="itemName" onClick={itemDetailHandler}>
        <h4 title={name}>{name}</h4>
      </div>
      <p className="item-genre">{genre}</p>
      <div className="add-to-cart">
        <h2>€{price}</h2>
        <button className="add-to-cart-btn" onClick={addToCartHandler}>
          Add To Cart
        </button>
      </div>
    </div>
  );
}
