import React from "react";
import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-3">
          <div className="card border-0">
            <img className="card-img-top" src="https://docs.google.com/uc?id=1XpU1FHq4qIZva_xaBYwFQ8tlhZVDP_Dx" alt="irwin-headshot" />
            <div className="card-body">
              <h2 className="card-title"> Irwin Marcano</h2>
              <hr />
              <p className="card-text h4">Web Developer</p>
              {/* Weather Information */}
              <img src="https://openweathermap.org/img/wn/04d.png" alt="Weather icon" height="100" width="100" />
              <p className="lead font-italic">Chicago | Broken Clouds</p>
              <p className="h1">
                {" "}
                77 <span>&#176;</span> F{" "}
                <span className="lead">
                  {" "}
                  25 <span>&#176;</span> C
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="col-8 offset-1">
          <div className="jumbotron bg-transparent m-0 p-1">
            <blockquote className="blockquote">
              <p className="lead">
                Certified Web Developer with skills in Front-End Development using HTML, CSS, JavaScript, and Vue. Experience with object-oriented programming using Python Flask and Ruby on Rails; Cloud Computing knowledge with deploying applications
                to AWS and Version Control.
              </p>
              <Link to="/resume" className="btn btn-dark" role="button">
                Learn more
              </Link>
            </blockquote>
            <hr />
          </div>

          <h2 className="mb-5 text-center">Get in touch</h2>

          <div className="row justify-content-around">
            <a href="https://github.com/irwinx16" target="_black">
              <img src="https://docs.google.com/uc?id=1qenoe8B7YbccuDpLAmO312lxnVhy21s1" className="w-75" />
            </a>
            <a href="https://www.linkedin.com/in/irwinx16/" target="_black">
              <img src="https://docs.google.com/uc?id=1DKGdcSWxeKopkfW_jeppr8xhrPbQW5BO" className="w-75" />
            </a>
            <a href="mailto:irgranados16@gmail.com?subject=Interview Request - <POSITION>" target="_black">
              <img src="https://docs.google.com/uc?id=1XoFHduV6hfyasUBGMGYBNBQr6jXNnC_p" className="w-75" />
            </a>
            <a href="https://drive.google.com/file/d/1DSBaBHLeaE5_-lyIRz9-EpdfBLmEF8PO/preview" target="_black">
              <img src="https://docs.google.com/uc?id=11DqVBbRU5SkAaCGYHovOj6lNZ12HvfDx" className="w-75" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
