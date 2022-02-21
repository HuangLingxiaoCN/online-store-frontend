import ListingItem from "./ListingItem"
import NewListing from "./NewListing"
import '../../../sass/Listings.scss'

export default function Listings({listings}: any) {

  return (
    <div className="listings-container">
      {listings.map((listing: any) => {
        return <ListingItem key={listing._id} listing={listing} />
      })}
      <NewListing />
    </div>
  )
}
