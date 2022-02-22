import { useState } from "react";

import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DeleteListingModal from "../../UI/deleteListingModal/DeleteListingModal";
import "../../../sass/ListingItem.scss";

export default function ListingItem(props: any) {
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const { listing, userEmail, setListings } = props;

  return (
    <div className="listing-container">
      <div className="listing-image-wrap">
        <span className="listing-delete">
          <FontAwesomeIcon
            icon={faTimes}
            className="listing-delete"
            onClick={() => setDeleteModalOpen(true)}
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

      {deleteModalOpen && (
        <DeleteListingModal
          setDeleteModalOpen={setDeleteModalOpen}
          listing={listing}
          setListings={setListings}
          userEmail={userEmail}
        />
      )}
    </div>
  );
}
