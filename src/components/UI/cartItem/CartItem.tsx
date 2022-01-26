import "../../../sass/CartItem.scss";

export default function CartItem(props: any) {
  const { imageUrl, productName, price, quantity } = props.item;

  return (
    <div className="cartItem-container">
      <img src={imageUrl} alt={productName} className="cartItem-image" />
      <p className="cartItem-name">{productName}</p>
      <select className="cartItem-quantity">
        <option selected>{quantity}</option>
        {quantity !== 1 && <option value="1">1</option>}
        {quantity !== 2 && <option value="2">2</option>}
        {quantity !== 3 && <option value="3">3</option>}
        {quantity !== 4 && <option value="4">4</option>}
        {quantity !== 5 && <option value="5">5</option>}
        {quantity !== 6 && <option value="6">6</option>}
        {quantity !== 7 && <option value="7">7</option>}
        {quantity !== 8 && <option value="8">8</option>}
        {quantity !== 9 && <option value="9">9</option>}
        {quantity !== 10 && <option value="10">10</option>}
      </select>
      <p className="cartItem-price">Price: €{price * quantity}</p>
    </div>
  );
}
