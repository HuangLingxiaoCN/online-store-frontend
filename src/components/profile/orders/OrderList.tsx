import Order from "./Order";

import { GenericProps } from "../../../Types";
import { GenericItem } from "../../../Types";
import "../../../sass/OrderList.scss";

export default function OrderList({
  orders,
  userEmail,
  setOrders,
}: GenericProps) {
  return (
    <div className="orderList-container">
      {orders.map((order: GenericItem) => (
        <Order
          order={order}
          userEmail={userEmail}
          setOrders={setOrders}
          key={order._id}
        />
      ))}
    </div>
  );
}
