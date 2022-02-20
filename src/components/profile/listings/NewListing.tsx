import { useState } from 'react'

import NewListingModal from '../../UI/newListingModal/NewListingModal'
import '../../../sass/NewListing.scss'

export default function NewListing() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="newListing-container">
      <button type="button" className="newListing-btn" onClick={() => setModalOpen(true) }>+</button>
      
      {modalOpen && <NewListingModal setModalOpen={setModalOpen} />}
    </div>
  )
}
