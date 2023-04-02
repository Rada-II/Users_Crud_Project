// import React, { useState, useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";

// import UserForm from "../components/UserForm";

// function UserEdit() {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     fetchUser(id);
//   }, [id]);

//   const fetchUser = async (id) => {
//     const res = await fetch(`https://randomuser.me/api?results=1&seed=${id}`);
//     const data = await res.json();
//     setUser(data.results[0]);
//   };

//   const handleSubmit = (formData) => {
//     console.log(formData);
//     navigate(`/users/${id}`);
//   };

//   if (!user) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <h2>Edit User</h2>
//       <UserForm user={user} onSubmit={handleSubmit} />
//     </div>
//   );
// }

// export default UserEdit;

import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import UserForm from "../components/UserForm";

function UserEdit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchUser(id);
  }, [id]);

  const fetchUser = async (id) => {
    const res = await fetch(`https://randomuser.me/api?results=1&seed=${id}`);
    const data = await res.json();
    setUser(data.results[0]);
  };

  const handleSubmit = (formData) => {
    console.log(formData);
    navigate(`/users/${id}`);
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <div className="create-wrapper">
        <h2>Edit User</h2>
      </div>
      <UserForm user={user} onSubmit={handleSubmit} />
    </div>
  );
}

export default UserEdit;
