import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FaBars, FaTimes, FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";

function Navbar({ onSearch }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchText, setSearchText] = useState("");

  const handleSearchSubmit = (e) => {
    e.preventDefault();

    const q = searchText.trim();
    if (!q) return;

    onSearch(q);
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <h1 className="logo">TravelX</h1>

      <ul className={menuOpen ? "nav-links active" : "nav-links"}>
        <li>
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        </li>

        <li>
          <Link to="/" onClick={() => setMenuOpen(false)}>Features</Link>
        </li>

        <li>
          <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
        </li>

        <li>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
        </li>
        <li>
          <Link to="/login" onClick={() => setMenuOpen(false)}>Login</Link>
        </li>
      <li>
  <Link to="/signup" className="signup-btn">Sign Up</Link>
</li>

             
        <li className="nav-search">
          <form onSubmit={handleSearchSubmit} className="search-form">
            <input
              type="text"
              placeholder="Search..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              className="search-input"
            />
            <button type="submit" className="search-btn">
              Go
            </button>
          </form>
        </li>
      </ul>

      <div className="nav-icons">
        <FaInstagram />
        <FaFacebookF />
        <FaYoutube />
      </div>

      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
}

export default Navbar;
