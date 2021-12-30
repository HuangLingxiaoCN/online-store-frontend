// import { useState } from 'react';
import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import ProfilePage from './pages/ProfilePage'
import LoginPage from './pages/LoginPage'
import './sass/App.scss';

/*
  TODO: 1. User register
        2. User login (jwt in cookie)
        3. Cart items list
        4. Listing items list
        
*/
function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
