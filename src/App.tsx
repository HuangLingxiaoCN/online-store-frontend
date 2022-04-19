import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import ProfilePage from './pages/ProfilePage'
import AdminHome from './pages/admin/AdminHome';
import AdminUsers from './pages/admin/AdminUsers';
import AdminProducts from './pages/admin/AdminProducts';
import AdminProductDetail from './pages/admin/AdminProductDetail';
import AdminOrders from './pages/admin/AdminOrders';
import AdminLoginPage from './pages/AdminLoginPage';
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage';
import ItemDetail from './pages/ItemDetail';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import CheckOutSuccess from './pages/CheckOutSuccess';
import OrderDetail from './pages/OrderDetail';
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
        11. Display owners' emails on itemdetail page and disable add to cart button if the item's owner is logged in(you cannot sell items to yourself) (\/)
        12. Add registration email verification ()
        13. After Checkout, create a billing information page to collect users' billing info. And Store orders in database (\/)
        14. Show Order History in user Profile page and add delete order function(\/)
        15. Create an admin account page to manage all products, users and orders ()
        16. Add email validation in backend to verify the email is valid. And password length verification. ()
*/

// App.tsx component contains all the React Routes in the application
function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/orderDetail" element={<OrderDetail />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/detail" element={<ItemDetail />} />
        <Route path="/admin" element={<AdminHome />} />
        <Route path="/admin/home" element={<AdminHome />} />
        <Route path="/admin/users" element={<AdminUsers />} />
        <Route path="/admin/products" element={<AdminProducts />} />
        <Route path="/admin/products/productDetail" element={<AdminProductDetail />} />
        <Route path="/admin/orders" element={<AdminOrders />} />
        <Route path="/adminLogin" element={<AdminLoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/order" element={<CheckoutPage />} />
        <Route path="/checkOutSuccess" element={<CheckOutSuccess />} />
      </Routes>
    </div>
  );
}

export default App;
