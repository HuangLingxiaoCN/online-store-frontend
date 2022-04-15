import { GenericItem, GenericProps } from "../../../Types";

export default function UserTable(props: GenericProps) {
  const { users } = props;
  console.log(users);

  return (
    <div>
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
            return <tr key={user._id}>
              <td>{user.email}</td>
              <td>{user.isAdmin.toString()}</td>
              <td>{user.isSuspended.toString()}</td>
            </tr>
          })}
        </tbody>
      </table>
    </div>
  );
}
