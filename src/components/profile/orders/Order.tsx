import { useState } from "react";
import { Link } from "react-router-dom";

import { GenericProps } from "../../../Types";

import DeleteOrderModal from "../../UI/deleteOrderModal/DeleteOrderModal";
import "../../../sass/Order.scss";

export default function Order({ order, userEmail, setOrders }: GenericProps) {
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);

  return (
    <div className="orderItem">
      <Link to="/orderDetail" state={{ userEmail, order }}>
        <p>#{order._id}</p>
      </Link>
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
