import { useNavigate } from "react-router-dom";

import "../../sass/Item.scss";

export default function Item(props: any) {
  const { imageUrl, name, genre, price } = props;
  const navigate = useNavigate();

  const itemDetailHandler = () => {
    // passing props to detail page
    navigate("/detail", { state: { imageUrl, name, genre, price }});
  }

  return (
    <div className="item-container">
      <img className="image" src={imageUrl} alt={name} onClick={itemDetailHandler} />
      <h4 className="itemName" onClick={itemDetailHandler}>{name}</h4>
      <p>{genre}</p>
      <h2>€{price}</h2>
    </div>
  );
}
