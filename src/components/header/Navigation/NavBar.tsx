import React from 'react'

import Login from './Login'
import Profile from './Profile'
import Register from './Register'
import '../../../css/NavBar.css'

export default function NavBar() {
  return (
    <div className="navbar-container">
      <Login />
      <Profile />
      <Register />
    </div>
  )
}
