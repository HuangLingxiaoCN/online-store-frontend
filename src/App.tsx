import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import ProfilePage from './pages/ProfilePage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage';
import ItemDetail from './pages/ItemDetail';
import CartPage from './pages/CartPage';
import './sass/App.scss';

/*
  TODO: 3. Cart items list
        4. Listing items list
        
*/
function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/detail" element={<ItemDetail />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </div>
  );
}

export default App;
