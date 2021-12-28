import React from 'react'

import SearchBar from './SearchBar'
import NavBar from './Navigation/NavBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStore } from '@fortawesome/free-solid-svg-icons'
import '../../css/Header.css'

export default function Header() {
  return (
    <div className="header">
      <FontAwesomeIcon icon={faStore} style={{ fontSize: '4rem', color: '#000000' }}/>
      <SearchBar />
      <NavBar />
    </div>
  )
}
