import CartItem from "./CartItem";

export default function CartList({ cartItems, setCartItems, setTotal }: any) {
  return (
    <div>
      {cartItems.map((item: any) => {
        return <CartItem item={item} key={item._id} cartItems={cartItems} setCartItems={setCartItems} setTotal={setTotal} />;
      })}
    </div>
  );
}
