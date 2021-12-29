import React from 'react'
import { Link } from "react-router-dom";

import Login from './Login'
import Profile from './Profile'
import Register from './Register'
import '../../../css/NavBar.css'

export default function NavBar() {
  return (
    <div className="navbar-container">
      <Login />
      <Link to="/profile">
        <Profile />
      </Link>
      <Register />
    </div>
  )
}
