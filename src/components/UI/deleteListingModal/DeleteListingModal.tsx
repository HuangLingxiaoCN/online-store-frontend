import axios from "axios";
import Cookies from "js-cookie";

import { GenericProps } from "../../../Types";
import { GenericItem } from "../../../Types";
import "../../../sass/DeleteListingModal.scss";

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
        setListings((state: any) => {
          const newState = state.filter((l: GenericItem) => l._id !== _id);
          return newState;
        });
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="deleteListingModal-background">
      <div className="deleteListingModal-container">
        <p className="deleteListingModal-warningMsg">
          Are you sure to delete this listing ?
        </p>
        <div className="deleteListingModal-btnContainer">
          <button
            onClick={() => setDeleteModalOpen(false)}
            className="deleteListingModal-btn cancelBtn"
          >
            Cancel
          </button>
          <button
            className="deleteListingModal-btn yesBtn"
            onClick={deleteListingHandler}
          >
            Yes
          </button>
        </div>
      </div>
    </div>
  );
}
