import { GenericProps } from "../../../../Types";
import "../../../../sass/CartBtn.scss";

export default function Cart({cartItemsQuantity}: GenericProps) {

  return (
    <div style={{ marginRight: "10px" }}>
      <button className="cart-btn">Cart - {cartItemsQuantity}</button>
    </div>
  )
}
