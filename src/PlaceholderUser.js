import React from "react";

export default function PlaceholderUser({ users }) {
  return (
    <React.Fragment>
      Placeholder User
      <table className="table" border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
          </tr>
        </thead>
        {users.map((user, index) => (
          <tbody>
            <tr key={user.id.toString()}>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </React.Fragment>
  );
}
