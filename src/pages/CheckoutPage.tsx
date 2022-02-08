import { useNavigate, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleLeft } from "@fortawesome/free-solid-svg-icons";

import "../sass/CheckoutPage.scss";

export default function CheckoutPage() {
  const { state }: any = useLocation();
  const navigate = useNavigate();
  const cartItems = state;

  return (
    <div>
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
      <div className="checkout-container">
        <h1>Your Order Detail:</h1>
        <table>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
          {cartItems.map((item: any) => (
            <tr>
              <td>{item.productName}</td>
              <td>{(item.price / item.quantity).toFixed(2)}</td>
              <td>{item.quantity}</td>
              <td>{item.price.toFixed(2)}</td>
            </tr>
          ))}
        </table>
        <div className="checkout-totalPrice">
          <p>
            Total:{" €"}
            {cartItems
              .map((item: any) => item.price)
              .reduce(
                (accumulator: number, current: number) =>
                  (accumulator += current)
              )
              .toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
}
