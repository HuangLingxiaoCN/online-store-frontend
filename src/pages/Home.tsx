import { useState } from 'react'
import { useSelector } from 'react-redux'

import { RootState } from '../redux/Types'
import Header from '../components/header/Header'
import ItemList from '../components/body/ItemList'

export default function Home() {
  const [searchText, setSearchText] = useState<String>('')
  const loginState = useSelector((state: RootState) => state.isLoggedIn)

  const isLoggedIn = loginState ? true : false

  return (
    <div style={{ height: '100%' }}>
      <Header setSearchText={setSearchText} />
      {isLoggedIn && <h3>Hello there. You are logged in.</h3>}
      {!isLoggedIn && <h3>Hello. Please log in to start shopping.</h3>}
      <ItemList searchText={searchText} />
    </div>
  )
}
