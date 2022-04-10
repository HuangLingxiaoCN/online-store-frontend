import axios from "axios";

import { GenericProps } from "../../../Types";
import { GenericItem } from "../../../Types";
import "../../../sass/DeleteModal.scss";

export default function DeleteOrderModal({
  setDeleteModalOpen,
  userEmail,
  order,
  setOrders,
}: GenericProps) {
  const { _id } = order;

  const deleteOrderHandler = () => {
    axios
      .delete(
        "https://fierce-spring-store-backend.herokuapp.com/api/orders/deleteOrder",
        {
          data: { orderId: _id },
        }
      )
      .then((res: any) => {
        setDeleteModalOpen(false);
        // Here I update the orders state based on the previous state and return a new state
        setOrders((state: any) => {
          const newState = state.filter((l: GenericItem) => l._id !== _id);
          return newState;
        });
      })
      .catch((err: Error) => console.log(err.message));
  };

  return (
    <div className="deleteModal-background">
      <div className="deleteModal-container">
        <p className="deleteModal-warningMsg">
          Are you sure to delete this order from your order history ?
        </p>
        <div className="deleteModal-btnContainer">
          <button
            className="deleteModal-btn cancelBtn"
            onClick={() => setDeleteModalOpen(false)}
          >
            Cancel
          </button>
          <button
            className="deleteModal-btn yesBtn"
            onClick={deleteOrderHandler}
          >
            Yes
          </button>
        </div>
      </div>
    </div>
  );
}
