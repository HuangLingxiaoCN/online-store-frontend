import { useNavigate } from "react-router-dom";

import "../../sass/Item.scss";

export default function Item(props: any) {
  const { imageUrl, name, genre, price } = props;
  const navigate = useNavigate();

  const itemDetailHandler = () => {
    // passing props to detail page
    navigate("/detail", { state: { imageUrl, name, genre, price } });
  };

  return (
    <div className="item-container">
      <img
        className="image"
        src={imageUrl}
        alt={name}
        onClick={itemDetailHandler}
      />
      <div className="itemName" onClick={itemDetailHandler}>
        <h4 title={name}>{name}</h4>
      </div>
      <p>{genre}</p>
      <div className="add-to-cart">
        <h2>€{price}</h2>
        <button className="add-to-cart-btn">Add To Cart</button>
      </div>
    </div>
  );
}
