// /components/Footer.js
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footerdiv">
      <footer className="footer">
        <p>© 2024 TriviaVerse. All rights reserved.</p>
        <nav>
          <Link to="/about" style={linkStyle}>
            About
          </Link>
          {" | "}
          <Link to="/contact" style={linkStyle}>
            Contact
          </Link>
          {" | "}
          <Link to="/privacy" style={linkStyle}>
            Privacy Policy
          </Link>
        </nav>
      </footer>
    </div>
  );
};

const linkStyle = {
  color: "#61dafb",
  textDecoration: "none",
  margin: "0 5px",
};

export default Footer;
