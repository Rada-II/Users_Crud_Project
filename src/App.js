import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import UserCreate from "./pages/UserCreate";
import UserEdit from "./pages/UserEdit";
import UserList from "./pages/UserList";
import UserDetail from "./pages/UserDetail";
import Navbar from "./components/Navbar";
import "./App.css";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />

        <Routes>
          <Route path="/users" element={<UserList />} />
          <Route path="/users/create" element={<UserCreate />} />
          <Route path="/users/:id" element={<UserDetail />} />
          <Route path="/users/:id/edit" element={<UserEdit />} />
          <Route path="/" element={<UserList />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
