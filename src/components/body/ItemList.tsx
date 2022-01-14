import React, { useEffect, useState } from "react";
import axios from "axios";

import Item from "./Item";
import "../../sass/ItemList.scss";

export default function ItemList({ searchText }: any) {
  const [items, setItems] = useState<any>([]);
  const [isLoading, setIsLoading] = useState<any>(true);
  const [hasError, setHasError] = useState<any>(false);

  let filteredItems;

  useEffect(() => {
    axios("https://fierce-spring-store-backend.herokuapp.com/api/products")
      .then((res) => {
        setHasError(false);
        setIsLoading(false);
        setItems(res.data);
      })
      .catch((error) => {
        setHasError(true);
        setIsLoading(false);
        console.log(error);
      });
  }, []);

  filteredItems = items.filter((item: { name: string }) =>
    item.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="container">
      {isLoading && !hasError && <div className="loader"></div>}
      {hasError && !isLoading && (
        <p className="error-text">
          Something goes wrong. Try to refresh the page
        </p>
      )}
      {!hasError && !isLoading && (
        <div className="list-container">
          {filteredItems.map((item: any) => {
            return <Item {...item} key={item._id} />;
          })}
        </div>
      )}
    </div>
  );
}
