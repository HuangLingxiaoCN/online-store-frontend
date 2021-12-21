import React from 'react'

import SearchBar from './SearchBar'
import Login from './Login'
import { ReactComponent as Logo} from '../../logo.svg'
import './Header.scss'

export default function Header() {
  return (
    <div>
      <Logo className="logo" />
      <SearchBar />
      <Login />
    </div>
  )
}
