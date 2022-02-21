import ListingItem from "./ListingItem"
import NewListing from "./NewListing"
import '../../../sass/Listings.scss'

export default function Listings({listings, userEmail}: any) {

  return (
    <div className="listings-container">
      {listings.map((listing: any) => {
        return <ListingItem key={listing._id} listing={listing} userEmail={userEmail} />
      })}
      <NewListing />
    </div>
  )
}
