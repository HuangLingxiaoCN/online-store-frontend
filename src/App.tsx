import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import ProfilePage from './pages/ProfilePage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage';
import ItemDetail from './pages/ItemDetail';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import './sass/App.scss';

/*
  TODO: 1. fix bugs:
          - cannot login after logout (\/)
          - add to cart does not update cart quantity button in nav bar (\/)
          - registering new user does not render the header UI (\/)
        2. Implement "add to cart" functionality in ItemDetail page (\/)
        3. Style Cart page and implement change cart item quantity functionality (\/)
        4. Add more user feedbacks for adding item to cart actions (optional: like a pop up window)
        5. Checkout function page and clear all cart items afterwards (\/)
        6. User's listings UI (\/)
        7. Upload Listing and update the UI (\/)
        8. Delete Listing functionality with a popup warning window and update the UI (\/)
        9. Display item quantity in ItemDetail page (\/)
        10. Finally remove all console.log and fixing all bugs (\/)
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
        <Route path="/order" element={<CheckoutPage />} />
      </Routes>
    </div>
  );
}

export default App;
