import React, { useEffect, useState } from "react";
import axios from "axios";

import Item from "./Item";
import "../../css/ItemList.css";

export default function ItemList() {
  const [items, setItems] = useState<any>([]);
  const [isLoading, setIsLoading] = useState<any>(true);

  useEffect(() => {
    axios
      .get("https://fierce-spring-store-backend.herokuapp.com/api/products")
      .then((res) => {
        setItems(res.data);
        setIsLoading(false)
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="container">
      <h3>Find something you want. Upload something others need</h3>
      {isLoading ? (
        <div className="loader"></div>
      ) : (
        <div className="list-container">
          {items.map((item: any) => {
            return <Item {...item} key={item._id} />;
          })}
        </div>
      )}
    </div>
  );
}
