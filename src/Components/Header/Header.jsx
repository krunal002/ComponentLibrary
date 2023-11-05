import "./Header.css";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Header = () => {
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();

  const links = [
    "avatar",
    "alert",
    "badge",
    "button",
    "card",
    "heading",
    "text",
    "image"
  ];
  const searchHandler = () => {
    const isFound = links.includes(searchText.toLowerCase());
    if (isFound) {
      navigate(`/components/${searchText.toLowerCase()}`);
    } else {
      alert("Component not found!");
    }
    setSearchText("");
  };

  const getActiveStyle = ({ isActive }) => ({
    fontWeight: isActive ? "bold" : "",
    color: isActive ? "black" : ""
  });

  return (
    <header>
      <div>
        <h2>
          <span>CSS</span> Library
        </h2>
      </div>

      <div className="search-container">
        <input
          type="text"
          placeholder="Search for components..."
          className="search-input"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button className="search-button" onClick={searchHandler}>
          Search
        </button>
      </div>

      <div>
        <NavLink to="/" className="header-link" style={getActiveStyle}>
          Home
        </NavLink>
        <NavLink to="/component" className="header-link" style={getActiveStyle}>
          Component
        </NavLink>
      </div>
    </header>
  );
};
export default Header;
