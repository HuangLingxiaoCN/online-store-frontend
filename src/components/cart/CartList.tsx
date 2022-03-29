import CartItem from "./CartItem";
import { GenericProps } from "../../Types";
import { GenericItem } from "../../Types";

export default function CartList({ cartItems, setCartItems, setTotal }: GenericProps) {
  return (
    <div>
      {cartItems.map((item: GenericItem) => {
        return <CartItem item={item} key={item._id} cartItems={cartItems} setCartItems={setCartItems} setTotal={setTotal} />;
      })}
    </div>
  );
}
