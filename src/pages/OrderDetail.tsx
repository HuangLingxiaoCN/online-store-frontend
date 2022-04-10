import { faAngleDoubleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router";

import { GenericItem } from "../Types";
import "../sass/OrderDetail.scss";
import { Footer } from "../components/UI/footer/Footer";

export default function OrderDetail() {
  const navigate = useNavigate();
  const { state }: any = useLocation();
  const { order } = state;
  const { purchasedItems, billingInfo } = order;
  console.log(purchasedItems, billingInfo);

  return (
    <div>
      <button
        onClick={() => {
          navigate("/profile", { replace: true });
        }}
        className="back-to-home-btn"
      >
        <FontAwesomeIcon
          icon={faAngleDoubleLeft}
          style={{ marginRight: "5px" }}
        />
        Back to Profile page
      </button>
      <div className="orderDetail-container">
        <h1>Order Detail</h1>
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>OwnerEmail</th>
            </tr>
          </thead>
          <tbody>
            {purchasedItems.map((purchasedItem: GenericItem) => {
              return (
                <tr key={purchasedItem._id}>
                  <td>{purchasedItem.productName}</td>
                  <td>
                    {(purchasedItem.price / purchasedItem.quantity).toFixed(2)}
                  </td>
                  <td>{purchasedItem.quantity}</td>
                  <td>{purchasedItem.price.toFixed(2)}</td>
                  <td>{purchasedItem.ownerEmail}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <h2>Billing Information:</h2>
        <p className="orderDetail-container-billingInfo">
          {billingInfo.fullName} at {billingInfo.streetAddress} {", "}
          {billingInfo.city} {billingInfo.country}, {billingInfo.postalCode}.<br></br>
          Phone Number: {billingInfo.phoneNumber}.<br></br>Payment was made with {billingInfo.paymentMethod}
        </p>
      </div>
      <Footer />
    </div>
  );
}
