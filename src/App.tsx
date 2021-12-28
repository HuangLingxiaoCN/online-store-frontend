import React from 'react';
import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Profile from './pages/Profile'
import './css/App.css';

/*
  TODO: 3. search functionality
        4. store icon routes to home page
*/
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
