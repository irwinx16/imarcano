import React from "react";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
          <Link to="/" class="navbar-brand">
            <img src="https://docs.google.com/uc?id=1Gs9blxw2z_E1jdeW7b05LJrDar0eZ5JC" width="30" height="30" alt="IM Nav Logo" />
          </Link>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav nav-fill w-100">
              <li class="nav-item active">
                <Link to="/resume" class="nav-link disable">
                  Resume
                </Link>
              </li>
              <Link to="/contact" class="nav-item">
                <a class="nav-link disable" href="" tabindex="-1">
                  Contact
                </a>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
