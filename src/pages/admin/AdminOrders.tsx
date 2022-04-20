import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import AdminNav from "../../components/admin/nav/AdminNav";
import "../../sass/AdminOrders.scss";

export default function AdminOrders() {
  const [users, setUsers] = useState([]);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios("https://fierce-spring-store-backend.herokuapp.com/api/user")
      .then((response) => {
        setUsers(
          response.data.map((user: any) => {
            return user.email;
          })
        );
      })
      .catch((error: Error) => console.log(error));
  }, []);

  useEffect(() => {
    axios(
      "https://fierce-spring-store-backend.herokuapp.com/api/orders/getOrders/"
    )
      .then((response) => {
        setOrders(response.data);
      })
      .catch((error: Error) => console.log(error));
  }, []);

  return (
    <div className="admin-container">
      <div className="adminOrders-container">
        <h1>Orders Management Console</h1>
        <ul className="adminOrders-userList-container">
          {users.map((user: any) => {
            return (
              <li key={user}>
                <p className="adminOrders-userList-user">{user}</p>
                <ul className="adminOrders-orderList-container">
                  {orders.map((order: any) => {
                    return order.customerEmail === user ? (
                      <li key={order._id}>
                        <Link to="/admin/orders/OrderDetail" state={order}>
                          {order._id}
                        </Link>
                      </li>
                    ) : (
                      ""
                    );
                  })}
                </ul>
              </li>
            );
          })}
        </ul>
      </div>
      <AdminNav />
    </div>
  );
}
