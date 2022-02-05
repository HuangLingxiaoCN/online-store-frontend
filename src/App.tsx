import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import ProfilePage from './pages/ProfilePage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage';
import ItemDetail from './pages/ItemDetail';
import CartPage from './pages/CartPage';
import './sass/App.scss';

/*
  TODO: 1. fix bugs:
          - cannot login after logout (\/)
          - add to cart does not update cart quantity button in nav bar (\/)
          - registering new user does not render the header UI (\/)
        2. Implement "add to cart" functionality in ItemDetail page
        3. Add a "save" button in cart page to save the items quantity changes
        3. User's listings UI
        
*/

// App.tsx component contains all the React Routes in the application
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
