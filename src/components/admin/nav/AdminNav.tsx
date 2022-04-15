import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import "../../../sass/AdminNav.scss";

export default function AdminNav() {
  const navigate = useNavigate();

  return (
    <ul className="admin-sidebar">
      <h2>SideBar</h2>
      <Link to="/admin">
        <li>Home</li>
      </Link>
      <Link to="/admin/users">
        <li>Users</li>
      </Link>
      <Link to="/admin/products">
        <li>Products</li>
      </Link>
      <Link to="/admin/orders">
        <li>Orders</li>
      </Link>
      <button
        className="admin-logoutBtn"
        onClick={() => navigate("/", { replace: true })}
      >
        Log out
      </button>
    </ul>
  );
}
