import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    // <div className="container">
    <div className="header">
      <nav className="container">
        <div className="logo">
          <h1>Tech Blog</h1>
        </div>
        <div className="menu">
          <Link className="link" to="/">
            Home
          </Link>
          <Link className="link" to="/about">
            Nouveauté
          </Link>
          <Link className="link" to="/about">
            Categorie
          </Link>
          <Link className="link" to="/about">
            Apropos
          </Link>

          {/* <Link className="link" to="/contact">
              contact
            </Link> */}
        </div>
      </nav>
      <div className="header-banner container">
        <div className="text">
          <span>La technologie par un passionné</span>
          <h2>Rejoignez nous ici nous parlons tech</h2>

        </div>
      </div>
    </div>
    // </div>
  );
}
