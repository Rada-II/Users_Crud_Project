import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">User CRUD Project</h1>
      <ul className="nav-links">
        <li>
          <Link to="/users">Users</Link>
        </li>
        <li>
          <Link to="/users/create">Create User</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
