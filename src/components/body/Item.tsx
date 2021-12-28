import React from "react";

import "../../css/Item.css";

export default function Item(props: any) {
  return (
    <div className="item-container">
      <img src={props.imageUrl} alt={props.name} />
      <h4>{props.name}</h4>
      <p>{props.genre}</p>
      <h2>€{props.price}</h2>
    </div>
  );
}
