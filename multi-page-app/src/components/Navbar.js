import { NavLink } from "react-router-dom";
import "../styles/App.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">🚀 MyApp</h2>

      <div>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          About
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Contact
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;