import React, { useEffect, useState } from "react";
import axios from "axios";

import Item from "./Item";
import "../../sass/ItemList.scss";

export default function ItemList({ searchText }: any) {
  const [items, setItems] = useState<any>([]);
  const [isLoading, setIsLoading] = useState<any>(true);

  let filteredItems;

  useEffect(() => {
    axios
      .get("https://fierce-spring-store-backend.herokuapp.com/api/products")
      .then((res) => {
        setItems(res.data);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  filteredItems = items.filter((item: { name: string }) =>
    item.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="container">
      {isLoading ? (
        <div className="loader"></div>
      ) : (
        <div className="list-container">
          {filteredItems.map((item: any) => {
            return <Item {...item} key={item._id} />;
          })}
        </div>
      )}
    </div>
  );
}
