import React from "react";

export const NavBar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
          <a class="navbar-brand text-monospace font-weight-bold" href="">
            I M
          </a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav nav-fill w-100">
              <li class="nav-item active">
                <a class="nav-link" href="{{ url_for('resume') }}">
                  Resume
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link disable" href="{{ url_for('contact') }}" tabindex="-1">
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
