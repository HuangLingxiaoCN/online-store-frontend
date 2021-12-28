import React from 'react'

import Header from '../components/header/Header'
import ItemList from '../components/body/ItemList'

export default function Home() {
  return (
    <div style={{ height: '100%' }}>
      <Header />
      <ItemList />
    </div>
  )
}
