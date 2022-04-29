import AdminNav from "../../components/admin/nav/AdminNav";

import "../../sass/AdminHome.scss";

export default function AdminHome() {
  return (
    <div className="admin-container">
      <div className="admin-welcome-container">
        <h2 className="admin-welcome">
          Welcome to Admin management console for the full-stack online store.
          There you can, as an admin, not only view all the products, orders and
          users, but also remove products and suspend users. On the left hand
          side, you can see four navigation links to Home, Users, Products and
          Orders. Click one of them and view different management pages.
        </h2>
      </div>
      <AdminNav />
    </div>
  );
}
