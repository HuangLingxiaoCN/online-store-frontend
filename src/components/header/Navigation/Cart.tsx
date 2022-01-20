import '../../../sass/CartBtn.scss'

export default function Cart({cartItems}: any) {

  return (
    <div style={{ marginRight: "10px" }}>
      <button className="cart-btn">Cart - {cartItems.length}</button>
    </div>
  )
}
