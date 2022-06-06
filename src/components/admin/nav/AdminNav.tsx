import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

import "../../../sass/AdminNav.scss";


export default function AdminNav() {
  const navigate = useNavigate();

  return (
    <ul className="admin-sidebar">
      <h2>SideBar</h2>
      <NavLink to="/admin">
        <li>Home</li>
      </NavLink>
      <NavLink to="/admin/users">
        <li>Users</li>
      </NavLink>
      <NavLink to="/admin/products">
        <li>Products</li>
      </NavLink>
      <NavLink to="/admin/orders">
        <li>Orders</li>
      </NavLink>
      <button
        className="admin-logoutBtn"
        onClick={() => {
          Cookies.remove('jwt');
          navigate("/", { replace: true });
        }}
      >
        Log out
      </button>
    </ul>
  );
}
