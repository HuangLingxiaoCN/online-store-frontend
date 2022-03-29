import Item from "./Item";
import { GenericProps } from "../../../Types";
import { GenericItem } from "../../../Types";
import "../../../sass/ItemList.scss";

export default function ItemList({ searchText, items, isLoading, hasError, setCartItems, cartItems }: GenericProps) {
  let filteredItems;

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
          {filteredItems.map((item: GenericItem) => {
            return <Item {...item} key={item._id} setCartItems={setCartItems} cartItems={cartItems} />;
          })}
        </div>
      )}
    </div>
  );
}
