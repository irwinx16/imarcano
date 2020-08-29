import React from "react";

export const NavBar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
          <a class="navbar-brand" href="">
            <img src="https://docs.google.com/uc?id=1Gs9blxw2z_E1jdeW7b05LJrDar0eZ5JC" width="30" height="30" alt="IM Nav Logo" />
          </a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav nav-fill w-100">
              <li class="nav-item active">
                <a class="nav-link disable" href="">
                  Resume
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link disable" href="" tabindex="-1">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
