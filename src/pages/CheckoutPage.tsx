import { useNavigate, useLocation } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import Cookies from "js-cookie";
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

  const [userEmail, setUserEmail] = useState("");
  const jwt = Cookies.get("jwt")!;

  const totalPrice = cartItems
    .map((item: GenericItem) => item.price)
    .reduce((accumulator: number, current: number) => (accumulator += current))
    .toFixed(2);

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

  useEffect(() => {
    axios("https://fierce-spring-store-backend.herokuapp.com/api/user/me", {
      headers: { "x-auth-token": jwt },
    })
      .then((res) => {
        setUserEmail(res.data.email);
      })
      .catch((err) => console.log(err.message));
  }, [jwt]);

  const createOrderHandler = (e: React.FormEvent) => {
    e.preventDefault();

    // send the data to the server
    const data = {
      totalPrice: totalPrice,
      timestamp: new Date().toLocaleDateString(),
      customerEmail: userEmail,
      purchasedItems: cartItems.map((item: any) => {
        const { _id, ...newItem } = item;
        return newItem;
      }),
      billingInfo: {
        fullName: fullNameRef.current.value,
        country: countryRef.current.value,
        streetAddress: streetAddressRef.current.value,
        phoneNumber: phoneNumberRef.current.value,
        postalCode: postalCodeRef.current.value,
        city: cityRef.current.value,
        paymentMethod: paymentMethod,
      },
    };

    axios
      .post(
        "https://fierce-spring-store-backend.herokuapp.com/api/orders/createOrder",
        data
      )
      .then((response: any) => {
        console.log(response);
      })
      .catch((err: Error) => console.log(err.message));

    // After checking out successfully, go to checkOutSuccess page
    navigate("/checkOutSuccess", { replace: true });
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
      <div className="checkout-container">
        <h1>Your Cart Overview:</h1>
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
            {totalPrice}
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
