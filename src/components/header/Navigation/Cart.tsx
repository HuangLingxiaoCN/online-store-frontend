import '../../../sass/CartBtn.scss'

export default function Cart({cartItemsQuantity}: any) {

  return (
    <div style={{ marginRight: "10px" }}>
      <button className="cart-btn">Cart - {cartItemsQuantity}</button>
    </div>
  )
}
