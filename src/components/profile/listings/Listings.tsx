import ListingItem from "./ListingItem";
import NewListing from "./NewListing";
import "../../../sass/Listings.scss";

export default function Listings({ listings, userEmail, setListings }: any) {
  return (
    <div className="listings-container">
      {listings.map((listing: any) => {
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
