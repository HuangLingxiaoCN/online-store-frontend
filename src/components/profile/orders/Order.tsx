import { useState } from "react";

import { GenericProps } from "../../../Types";

import DeleteOrderModal from "../../UI/deleteOrderModal/DeleteOrderModal";
import "../../../sass/Order.scss";

export default function Order({ order, userEmail, setOrders }: GenericProps) {
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);

  return (
    <div className="orderItem">
      <p>#{order._id}</p>
      <p>{order.timestamp}</p>
      <p>€{order.totalPrice}</p>
      <button onClick={() => setDeleteModalOpen(true)}>Delete</button>
      {deleteModalOpen && (
        <DeleteOrderModal
          setDeleteModalOpen={setDeleteModalOpen}
          order={order}
          userEmail={userEmail}
          setOrders={setOrders}
        />
      )}
    </div>
  );
}
