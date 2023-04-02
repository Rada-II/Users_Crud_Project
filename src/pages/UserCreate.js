import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import UserForm from "../components/UserForm";

function UserCreate() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!name || !email) {
      setError("Both fields are required.");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setError("Invalid email format.");
      return;
    }

    const data = { name, email };
    fetch("/api/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then(() => navigate("/users"))
      .catch((error) => console.error(error));
  };

  return (
    <div className="container">
      <div className="create-wrapper">
        <h2>Create User</h2>
      </div>
      <UserForm
        user={{ name: { first: "", last: "" }, email: "" }}
        onSubmit={handleSubmit}
        onNameChange={handleNameChange}
        onEmailChange={handleEmailChange}
        error={error}
      />
      <div className="back">
        <Link to="/users">Back to Users</Link>
      </div>
    </div>
  );
}

export default UserCreate;
