import '../../../sass/CartBtn.scss'

export default function Cart({cartItems}: any) {

  const cartItemNum = cartItems.length;

  return (
    <div style={{ marginRight: "10px" }}>
      <button className="cart-btn">Cart - {cartItemNum}</button>
    </div>
  )
}
