import { useState } from "react";
import { GenericProps } from "../../../Types";
import NewListingModal from "../../UI/newListingModal/NewListingModal";
import "../../../sass/NewListing.scss";

export default function NewListing({ setListings, userEmail }: GenericProps) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="newListing-container">
      <button
        type="button"
        className="newListing-btn"
        onClick={() => setModalOpen(true)}
      >
        +
      </button>

      {modalOpen && (
        <NewListingModal
          setModalOpen={setModalOpen}
          userEmail={userEmail}
          setListings={setListings}
        />
      )}
    </div>
  );
}
