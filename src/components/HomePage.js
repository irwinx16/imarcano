import React from "react";
import { Link } from "react-router-dom";
import { Weather } from "./Weather";

export const HomePage = () => {
  return (
    <div className="container">
      <div className="row mt-5 align-items-center" id="personalInfo">
        <div className="col-md-3">
          <div className="card border-0">
            <img src="https://i.imgur.com/6nWHsPp.jpg" className="card-img-top" alt="headshotpicture" />
            <div className="card-body px-0">
              <h2 className="card-title">Irwin Marcano</h2>
              <h5 className="card-text">Web Developer</h5>
              <hr />
            </div>
          </div>
        </div>

        <div className="col-md-8 offset-md-1">
          <p className="lead">Self-motivated Developer experienced with a wide range of programming utilities and languages. Knowledgeable of backend and frontend development requirements. Collaborative problem-solver with an analytical mindset and excellent technical abilities.</p>

          <Link to="/resume" className="btn btn-dark" role="button">
            Learn more
          </Link>
          <hr />
        </div>
      </div>

      <div className="row" id="contactInfo">
        <div className="col-md-3 mb-3 text-center text-md-left order-last order-md-1">
          <Weather />
        </div>

        <div className="col-md-8 offset-md-1 order-first order-md-2" id="contactIcons">
          <h2 className="text-center mb-3">Get in touch</h2>
          <div className="row justify-content-around">
            <div className="mb-3">
              <a href="https://github.com/irwinx16" target="_black">
                <img src="https://i.imgur.com/0Vbe5RF.png" alt="github_icon" />
              </a>
            </div>
            <div className="mb-3">
              <a href="https://www.linkedin.com/in/irwinx16/" target="_black">
                <img src="https://i.imgur.com/n9xhCX4.png" alt="linkedin_icon" />
              </a>
            </div>

            <div className="mb-3">
              <a href="mailto:irgranados16@gmail.com?subject=Interview Request - <POSITION>" target="_black">
                <img src="https://i.imgur.com/TYE6LWC.png" alt="email_icon" />
              </a>
            </div>

            <div className="mb-3">
              <a href="https://drive.google.com/file/d/1dyVZ1NQLvEVGhtl7pDSJVvrahJo1GGUN/preview" target="_black">
                <img src="https://i.imgur.com/zPMpf6Y.png" alt="resume_icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
