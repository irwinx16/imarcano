import React from "react";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link to="/" className="navbar-brand">
            <img src="https://docs.google.com/uc?id=1Gs9blxw2z_E1jdeW7b05LJrDar0eZ5JC" width="30" height="30" alt="IM Nav Logo" />
          </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav nav-fill w-100">
              <li className="nav-item active">
                <Link to="/resume" className="nav-link">
                  Resume
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link disabled">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
