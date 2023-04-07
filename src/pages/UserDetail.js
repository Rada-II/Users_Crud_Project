import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function UserDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  // const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      const res = await fetch(`https://reqres.in/api/users/${id}`);
      const data = await res.json();
      setUser(data.data);
    };

    fetchUser();
  }, [id]);

  const handleEditClick = () => {
    navigate(`/user/${id}/edit`);
  };

  const handleDeleteClick = (id) => {
    fetch(`https://reqres.in/api/users/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then((res) =>
      console.log(res, "res") && res.status === 204
        ? navigate(`/?id=${id}`)
        : console.log("bad request")
    );
  };

  if (!user) {
    return <div className="error">Loading...</div>;
  }

  return (
    <div className="container">
      <div className="logo-wrapper">
        <h2 className="logo-detail">User Detail</h2>
      </div>
      <table>
        <tbody>
          <tr>
            <td>ID</td>
            <td>{id}</td>
          </tr>
          <tr>
            <td>First Name</td>
            <td>{user.first_name}</td>
          </tr>
          <tr>
            <td>Last Name</td>
            <td>{user.last_name}</td>
          </tr>
          <tr>
            <td>Email</td>
            <td>{user.email}</td>
          </tr>
        </tbody>
      </table>
      <div className="btn-wrapper">
        <button className="btn-edit" onClick={handleEditClick}>
          Edit
        </button>
        <button className="btn-delete" onClick={() => handleDeleteClick(id)}>
          Delete
        </button>
      </div>
    </div>
  );
}
export default UserDetail;
