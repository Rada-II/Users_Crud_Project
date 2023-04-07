import React, { useState } from "react";

function UserForm({ user, onSubmit }) {
  const [name, setName] = useState(`${user.first_name} ${user.last_name}`);
  const [email, setEmail] = useState(user.email);
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!name) {
      setNameError("Name is required");
    }
    if (!email) {
      setEmailError("Email is required");
    }
    if (name && email) {
      const res = await fetch(`https://reqres.in/api/users/${user.id}`, {
        method: "PUT",
        body: JSON.stringify({ name, email }),
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      onSubmit(data);
    }
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
    setNameError("");
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setEmailError("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={handleNameChange} />
        {nameError && <div>{nameError}</div>}
      </label>
      <br />
      <label>
        Email:
        <input type="email" value={email} onChange={handleEmailChange} />
        {emailError && <div>{emailError}</div>}
      </label>
      <br />
      <button type="submit">Update</button>
    </form>
  );
}

export default UserForm;
