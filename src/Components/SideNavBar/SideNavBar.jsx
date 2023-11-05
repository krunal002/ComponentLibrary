import "./SideNavBar.css";
import { NavLink } from "react-router-dom";
const SideNavBar = () => {
  const getActiveStyle = ({ isActive }) => ({
    fontWeight: isActive ? "bold" : "",
    color: isActive ? "tomato" : ""
  });

  return (
    <nav className="side-nav-bar">
      <NavLink
        to="/components/avatar"
        className="nav-sideBar"
        style={getActiveStyle}
      >
        Avatar
      </NavLink>
      <NavLink
        to="/components/alert"
        className="nav-sideBar"
        style={getActiveStyle}
      >
        Alert
      </NavLink>
      <NavLink
        to="/components/badge"
        className="nav-sideBar"
        style={getActiveStyle}
      >
        Badge
      </NavLink>
      <NavLink
        to="/components/button"
        className="nav-sideBar"
        style={getActiveStyle}
      >
        Button
      </NavLink>
      <NavLink
        to="/components/card"
        className="nav-sideBar"
        style={getActiveStyle}
      >
        Card
      </NavLink>
      <NavLink
        to="/components/heading"
        className="nav-sideBar"
        style={getActiveStyle}
      >
        Heading
      </NavLink>
      <NavLink
        to="/components/text"
        className="nav-sideBar"
        style={getActiveStyle}
      >
        Text
      </NavLink>
      <NavLink
        to="/components/image"
        className="nav-sideBar"
        style={getActiveStyle}
      >
        Image
      </NavLink>
    </nav>
  );
};
export default SideNavBar;
