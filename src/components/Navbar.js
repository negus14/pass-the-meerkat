import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import your CSS for styling

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLinkClick = () => {
    setDropdownOpen(false); // Close the dropdown when a link is clicked
  };

  return (
    <nav className="navbar">
      <div className="dropdown">
        <button onClick={toggleDropdown} className="dropbtn">
          Menu
        </button>
        {dropdownOpen && (
          <div className="dropdown-content">
            <Link to="/" className="link" onClick={handleLinkClick}>Home</Link>
            {/* <Link to="/about" className="link" onClick={handleLinkClick}>About</Link> */}
            {/* <Link to="/contacts" className="link" onClick={handleLinkClick}>Contacts</Link> */}
            {/* <Link to="/events" className="link" onClick={handleLinkClick}>Events</Link> */}
            {/* <Link to="/gallery" className="link" onClick={handleLinkClick}>Gallery</Link> */}
            <Link to="/press" className="link" onClick={handleLinkClick}>Press</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
