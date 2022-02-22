import axios from "axios";
import Cookies from "js-cookie";

import "../../../sass/DeleteListingModal.scss";

export default function DeleteListingModal({
  setDeleteModalOpen,
  listing,
  setListings,
  userEmail,
}: any) {
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
          const newState = state.filter((l: any) => l._id !== _id);
          console.log(newState);
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
