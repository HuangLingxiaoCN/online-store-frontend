import { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

import NewListingModal from "../../UI/newListingModal/NewListingModal";
import "../../../sass/NewListing.scss";

export default function NewListing({ setListings }: any) {
  const jwt = Cookies.get("jwt")!;
  const [modalOpen, setModalOpen] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    async function getUserEmail() {
      if (!jwt) throw new Error("jwt is not found in cookies!");
      const res: any = await axios(
        "https://fierce-spring-store-backend.herokuapp.com/api/user/me",
        {
          headers: { "x-auth-token": jwt },
        }
      );
      return res.data.email;
    }

    getUserEmail().then((data) => setEmail(data));
    // cleanup function to prevent
    // "Can't perform a React state update on an unmounted component" Error
    return () => {
      setEmail("");
    };
  }, [jwt]);

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
        <NewListingModal setModalOpen={setModalOpen} email={email} setListings={setListings} />
      )}
    </div>
  );
}
