import { GenericProps } from '../../../Types';
import { GenericItem } from '../../../Types';

import ListingItem from "./ListingItem";
import NewListing from "./NewListing";
import "../../../sass/Listings.scss";

export default function Listings({ listings, userEmail, setListings }: GenericProps) {
  return (
    <div className="listings-container">
      {listings.map((listing: GenericItem) => {
        return (
          <ListingItem
            key={listing._id}
            listing={listing}
            userEmail={userEmail}
            setListings={setListings}
          />
        );
      })}
      <NewListing setListings={setListings} />
    </div>
  );
}
