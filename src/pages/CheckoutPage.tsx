import { useNavigate, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleLeft } from "@fortawesome/free-solid-svg-icons";

import CountryDropdown from "../components/UI/countryDropdown/CountryDropdownList";
import { GenericItem } from "../Types";
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
      <div className="orderDetail-container">
        <h1>Your Order Detail:</h1>
        <table>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
          {cartItems.map((item: GenericItem) => (
            <tr>
              <td>{item.productName}</td>
              <td>{(item.price / item.quantity).toFixed(2)}</td>
              <td>{item.quantity}</td>
              <td>{item.price.toFixed(2)}</td>
            </tr>
          ))}
        </table>
      </div>

      <br></br><br></br><br></br>
      <h2 className="billingInfo-promptText">Enter your billing information: </h2>
      <br></br><br></br>

      <form className="billingInfo-form">
        <div className="billingInfo-group">
          <div>
            <p>Full Name</p>
            <input type="text" />
          </div>
          <div>
            <p>Country</p>
            <CountryDropdown />
          </div>
          <div>
            <p>Street Address</p>
            <input type="text" />
          </div>
        </div>
        <div className="billingInfo-group">
          <div>
            <p>Phone number</p>
            <input type="text" />
          </div>
          <div>
            <p>Postal Code</p>
            <input type="text" />
          </div>
          <div>
            <p>City</p>
            <input type="text" />
          </div>
        </div>
      </form>
      <div className="checkout-totalPrice">
        <p style={{ marginRight: "10vw" }}>
          Total Price:{" €"}
          {cartItems
            .map((item: GenericItem) => item.price)
            .reduce(
              (accumulator: number, current: number) => (accumulator += current)
            )
            .toFixed(2)}
        </p>
      </div>
      <div className="checkout-payingbtnContainer">
        <button className="checkout-payingbtn" type="button">Pay</button>
      </div>
    </div>
  );
}
