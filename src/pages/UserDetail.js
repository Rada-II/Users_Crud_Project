import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
function UserDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const res = await fetch(`https://randomuser.me/api?results=1&seed=${id}`);
      const data = await res.json();
      setUser(data.results[0]);
    };

    fetchUser();
  }, [id]);

  const handleEditClick = () => {
    navigate(`/users/${id}/edit`);
  };

  if (!user) {
    return <div>Loading...</div>;
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
            <td>{user.name.first}</td>
          </tr>
          <tr>
            <td>Last Name</td>
            <td>{user.name.last}</td>
          </tr>
          <tr>
            <td>Email</td>
            <td>{user.email}</td>
          </tr>
          <tr>
            <td>Phone</td>
            <td>{user.phone}</td>
          </tr>
        </tbody>
      </table>
      <div className="btn-wrapper">
        <button className="btn-edit" onClick={handleEditClick}>
          Edit
        </button>
      </div>
    </div>
  );
}
export default UserDetail;
