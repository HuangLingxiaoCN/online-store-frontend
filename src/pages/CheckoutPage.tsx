import { useNavigate, useLocation } from "react-router-dom";
import { useRef, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleLeft } from "@fortawesome/free-solid-svg-icons";

import CountryDropdown from "../components/UI/countryDropdown/CountryDropdownList";
import { GenericItem } from "../Types";
import "../sass/CheckoutPage.scss";

export default function CheckoutPage() {
  const { state }: any = useLocation();
  const navigate = useNavigate();
  const cartItems = state;

  const fullNameRef = useRef<HTMLInputElement>(document.createElement("input"));
  const countryRef = useRef<HTMLInputElement>(document.createElement("input"));
  const streetAddressRef = useRef<HTMLInputElement>(
    document.createElement("input")
  );
  const phoneNumberRef = useRef<HTMLInputElement>(
    document.createElement("input")
  );
  const postalCodeRef = useRef<HTMLInputElement>(
    document.createElement("input")
  );
  const cityRef = useRef<HTMLInputElement>(document.createElement("input"));
  const [paymentMethod, setPaymentMethod] = useState("");

  console.log(cartItems);

  const createOrderHandler = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(fullNameRef.current.value);
    console.log(countryRef.current.value);
    console.log(streetAddressRef.current.value);
    console.log(phoneNumberRef.current.value);
    console.log(postalCodeRef.current.value);
    console.log(cityRef.current.value);
    console.log(paymentMethod);

    // send the data to the server

  };

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
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item: GenericItem) => {
              return (
                <tr key={item._id}>
                  <td>{item.productName}</td>
                  <td>{(item.price / item.quantity).toFixed(2)}</td>
                  <td>{item.quantity}</td>
                  <td>{item.price.toFixed(2)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <br></br>
      <br></br>
      <br></br>
      <h2 className="billingInfo-promptText">
        Enter your billing information:{" "}
      </h2>
      <br></br>
      <br></br>

      <form onSubmit={createOrderHandler}>
        <div className="billingInfo-form">
          <div className="billingInfo-group">
            <div>
              <p>Full Name</p>
              <input type="text" ref={fullNameRef} required />
            </div>
            <div>
              <p>Country</p>
              <CountryDropdown ref={countryRef} required />
            </div>
            <div>
              <p>Street Address</p>
              <input type="text" ref={streetAddressRef} required />
            </div>
          </div>
          <div className="billingInfo-group">
            <div>
              <p>Phone number</p>
              <input type="text" ref={phoneNumberRef} required />
            </div>
            <div>
              <p>Postal Code</p>
              <input type="text" ref={postalCodeRef} required />
            </div>
            <div>
              <p>City</p>
              <input type="text" ref={cityRef} required />
            </div>
          </div>
          <div
            className="payment-options"
            onChange={(event: any) => {
              setPaymentMethod(event.target.value);
            }}
          >
            <p>Payment Options: </p>
            <input
              type="radio"
              id="paypal"
              value="paypal"
              name="paymentOptions"
            />
            <label htmlFor="paypal">PayPal</label>

            <input
              type="radio"
              id="applepay"
              value="applepay"
              name="paymentOptions"
            />
            <label htmlFor="applepay">Apple Pay</label>

            <input
              type="radio"
              id="googlepay"
              value="googlepay"
              name="paymentOptions"
            />
            <label htmlFor="googlepay">Google Pay</label>

            <input
              type="radio"
              id="alipay"
              value="alipay"
              name="paymentOptions"
            />
            <label htmlFor="alipay">Alipay</label>

            <input
              type="radio"
              id="visacard"
              value="visacard"
              name="paymentOptions"
            />
            <label htmlFor="visacard">Visa Card</label>
          </div>
        </div>

        <div className="checkout-totalPrice">
          <p style={{ marginRight: "10vw" }}>
            Total Price:{" €"}
            {cartItems
              .map((item: GenericItem) => item.price)
              .reduce(
                (accumulator: number, current: number) =>
                  (accumulator += current)
              )
              .toFixed(2)}
          </p>
        </div>
        <div className="checkout-payingbtnContainer">
          <button className="checkout-payingbtn" type="submit">
            Pay Now
          </button>
        </div>
      </form>
    </div>
  );
}
