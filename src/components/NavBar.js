import React from "react";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link to="/" className="navbar-brand">
            <h1 className="text-monospace m-0 p-0">I M</h1>
          </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav nav-fill w-100">
              {/* <li className="nav-item active">
                <Link to="/resume" className="nav-link">
                  Resume
                </Link>
              </li> */}

              <li className="nav-item">
                <Link to="/resources" className="nav-link">
                  Resources
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
