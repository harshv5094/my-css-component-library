import "./header.css";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div className="navbar">
      <NavLink className="header" to="/">
        My Component Library
      </NavLink>
      <nav className="nav-links">
        <NavLink className="nav-link" to="/">
          Home
        </NavLink>
        <NavLink className="nav-link" to="/components">
          Components
        </NavLink>
      </nav>
    </div>
  );
}
