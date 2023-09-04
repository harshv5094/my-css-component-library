import { NavLink } from "react-router-dom";
import "./home.css";

export default function Home() {
  return (
    <div className="home">
      <div className="home-page-title">
        <b>My Personal CSS Component Library</b>
      </div>
      <div className="home-page-description">
        This is a collection of different css component library
      </div>
      <NavLink to="/components">
        <button className="primary-button">Get Started</button>
      </NavLink>
    </div>
  );
}
