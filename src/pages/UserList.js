import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function UserList() {
  const [users, setUsers] = useState([]);

  // Fetch all users from the API when the component mounts
  useEffect(() => {
    fetchUsers();
  }, []);

  const { params } = useParams();
  console.log(params);

  const fetchUsers = async () => {
    const res = await fetch("https://reqres.in/api/users");
    const data = await res.json();
    setUsers(data.data);
  };

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {users &&
            users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>
                  <Link to={`/user/${user.id}`}>
                    {user.first_name} {user.last_name}
                  </Link>
                </td>
                <td>{user.email}</td>
                <td>
                  <Link to={`/user/${user.id}/edit`}>Edit</Link>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserList;
