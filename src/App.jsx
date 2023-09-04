import { Routes, Route, NavLink, useLocation } from "react-router-dom";
import Home from "./pages/Home/Home";
import Components from "./pages/Components/Components";
import Header from "./documentation/Header/Header";
import "./styles.css";

function SideNav() {
  return (
    <div className="side-nav">
      <h4>SideNav Component</h4>
      <h4>SideNav Component</h4>
      <h4>SideNav Component</h4>
      <h4>SideNav Component</h4>
    </div>
  );
}

export default function App() {
  const location = useLocation();
  const showSidebar = !(
    location.pathname === "/" || location.pathname === "/components"
  );
  return (
    <div className="app">
      <Header />
      {showSidebar && <SideNav />}
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/components" element={<Components />} />
        </Routes>
      </div>
    </div>
  );
}
