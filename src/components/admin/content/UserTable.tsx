import Cookies from "js-cookie";
import axios from "axios";
import { useState, useEffect } from "react";
import { GenericItem, GenericProps } from "../../../Types";

import "../../../sass/UserTable.scss";

export default function UserTable(props: GenericProps) {
  const [isSuspended, setIsSuspended] = useState<any>([]);
  const { users, setUsers } = props;

  useEffect(() => {
    setIsSuspended(
      users.map((user: any) => {
        return user.isSuspended;
      })
    );
  }, [users]);

  const toggleSuspensionHandler = (targetEmail: string) => {
    axios
      .post(
        "https://fierce-spring-store-backend.herokuapp.com/api/user/suspend",
        {
          adminEmail: "Jason@gmail.com",
          targetEmail: targetEmail,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "x-auth-token": Cookies.get("jwt")!,
          },
        }
      )
      .then((response) => {
        // update the users
        setUsers(response.data);
      })
      .catch((error: Error) => {
        console.log(error);
      });
  };

  return (
    <div className="userTable-container">
      <h1>User Console</h1>
      <table>
        <thead>
          <tr>
            <th>User emails</th>
            <th>isAdmin</th>
            <th>Suspended</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user: GenericItem) => {
            return (
              <tr key={user._id}>
                <td>{user.email}</td>
                <td>{user.isAdmin.toString()}</td>
                <td>
                  <button onClick={() => toggleSuspensionHandler(user.email)}>
                    {isSuspended[users.indexOf(user)] !== undefined
                      ? isSuspended[users.indexOf(user)].toString()
                      : "null"}
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
