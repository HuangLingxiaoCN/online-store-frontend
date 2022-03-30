import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import Cookies from "js-cookie";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleLeft } from "@fortawesome/free-solid-svg-icons";

import { RootState } from "../redux/ReduxTypes";
import { Footer } from "../components/UI/footer/Footer";

import "../sass/ItemDetail.scss";

export default function ItemDetail() {
  const { state }: any = useLocation();
  console.log(state);
  const { imageUrl, name, genre, numberInStock, price, description, email, productId, ownerEmail } = state;
  const isLoggedIn = useSelector((state: RootState) => state.isLoggedIn);
  const navigate = useNavigate();

  // check if the user logged in is also the seller
  const isSeller = ownerEmail === email ? true : false;

  const addToCartHandler = () => {
    if (!isLoggedIn) {
      alert("Please fist log in");
    } else {
      const data = {
        email,
        productId,
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
          .catch((error: Error) => console.log(error));
      } else {
        throw new Error("JWT is not defined in cookies");
      }
    }
  };

  return (
    <>
      <div style={{ minHeight: "100vh" }}>
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
        <div className="detail-container">
          <img src={imageUrl} alt={name} className="detailImage" />
          <div className="info-container">
            <h1>{name}</h1>
            <h2 className="price">€{price}</h2>
            <p className="genre">Genre: {genre}</p>
            <p className="numberInStock">Number In Stock: {numberInStock}</p>
            <p className="ownerEmail">Seller: {ownerEmail}</p>
            <p className="description">{description}</p>
            <button
              className="add-to-cart-btn-detail"
              onClick={addToCartHandler}
              disabled={isSeller}
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
