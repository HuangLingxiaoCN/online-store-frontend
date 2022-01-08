import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";

export default function CartPage() {
  const [cartItems, setCartItems] = useState();

  useEffect(() => {
    // get all cart items from the user
    const jwt: any = Cookies.get("jwt");
    axios("https://fierce-spring-store-backend.herokuapp.com/api/user/me", {
      headers: { "x-auth-token": jwt },
    })
      .then((res) => setCartItems(res.data))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h2>Cart Page</h2>
      {console.log(cartItems)}
    </div>
  );
}
