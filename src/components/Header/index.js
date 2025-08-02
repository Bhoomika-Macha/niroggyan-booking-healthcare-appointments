import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import "./index.css";

const Header = () => {
  const navigate = useNavigate();

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      navigate(`/?q=${e.target.value}`);
    }
  };

  return (
    <header className="header">
      <div className="brand">niroggyan</div>
      <div className="nav-search">
        <div className="nav-links">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/appointments" className="nav-link">
            My Appointments
          </Link>
        </div>
        <div className="search-container">
          <FiSearch className="search-icon" />
          <input
            type="text"
            className="search-input"
            placeholder="Search doctors by name or specialization"
            onKeyDown={handleSearch}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
