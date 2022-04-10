import axios from "axios";
import Cookies from "js-cookie";

import { GenericProps } from "../../../Types";
import { GenericItem } from "../../../Types";
import "../../../sass/DeleteModal.scss";

export default function DeleteListingModal({
  setDeleteModalOpen,
  listing,
  setListings,
  userEmail,
}: GenericProps) {
  const { _id } = listing;
  const jwt = Cookies.get("jwt")!;

  const deleteListingHandler = () => {
    axios({
      url: "https://fierce-spring-store-backend.herokuapp.com/api/user/listing/delete",
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
        "x-auth-token": jwt,
      },
      data: {
        productId: _id,
        email: userEmail,
      },
    })
      .then((res) => {
        setDeleteModalOpen(false);
        // Here I update the listings state based on the previous state and return a new state
        setListings((state: any) => {
          const newState = state.filter((l: GenericItem) => l._id !== _id);
          return newState;
        });
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="deleteModal-background">
      <div className="deleteModal-container">
        <p className="deleteModal-warningMsg">
          Are you sure to delete this listing ?
        </p>
        <div className="deleteModal-btnContainer">
          <button
            onClick={() => setDeleteModalOpen(false)}
            className="deleteModal-btn cancelBtn"
          >
            Cancel
          </button>
          <button
            className="deleteModal-btn yesBtn"
            onClick={deleteListingHandler}
          >
            Yes
          </button>
        </div>
      </div>
    </div>
  );
}
