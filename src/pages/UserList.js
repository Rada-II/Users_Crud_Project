import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function UserList() {
  const [users, setUsers] = useState([]);

  // Fetch all users from the API when the component mounts
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const res = await fetch("https://randomuser.me/api?results=10");
    const data = await res.json();
    setUsers(data.results);
  };

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>City</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.login.uuid}>
              <td>{user.login.uuid}</td>
              <td>
                <Link to={`/users/${user.login.uuid}`}>
                  {user.name.first} {user.name.last}
                </Link>
              </td>
              <td>{user.email}</td>
              <td>{user.location.city}</td>
              <td>
                <Link to={`/users/${user.login.uuid}/edit`}>Edit</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserList;
