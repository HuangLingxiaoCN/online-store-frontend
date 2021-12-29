import { useState } from 'react'

import Header from '../components/header/Header'
import ItemList from '../components/body/ItemList'

export default function Home() {
  const [searchText, setSearchText] = useState<String>('')

  return (
    <div style={{ height: '100%' }}>
      <Header setSearchText={setSearchText} />
      <ItemList searchText={searchText} />
    </div>
  )
}
