import axios from "axios";
import Cookies from "js-cookie";

import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../../sass/ListingItem.scss";

export default function ListingItem(props: any) {
  const { listing, userEmail } = props;
  const { _id } = listing;
  const jwt = Cookies.get("jwt")!;

  const deleteListing = () => {
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
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <div className="listing-container">
      <div className="listing-image-wrap">
        <span className="listing-delete">
          <FontAwesomeIcon
            icon={faTimes}
            className="listing-delete"
            onClick={deleteListing}
          />
        </span>
        <img
          src={listing.imageUrl}
          alt={listing.name}
          className="listing-image"
        />
      </div>

      <h2 className="listing-price">€{listing.price}</h2>
      <p className="listing-name" title={listing.name}>
        {listing.name}
      </p>
      <p className="listing-genre">{listing.genre}</p>
    </div>
  );
}
