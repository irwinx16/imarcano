import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Weather } from "./Weather";

export const HomePage = () => {
  
  return (
    <div className="container">
	<Weather />
      <div className="row mt-5">
        <div className="col-lg-3">
          <div className="card border-0">
            <img className="card-img-top" src="https://i.imgur.com/6nWHsPp.jpg" alt="irwin-headshot" />
            <div className="card-body">
              <h2 className="card-title"> Irwin Marcano</h2>
              <hr />
              <p className="card-text h4">Web Developer</p>
            </div>
          </div>
        </div>
		
        <div className="col-8 offset-1">
          <div className="jumbotron bg-transparent m-0 p-1">
            <blockquote className="blockquote">
              <p className="lead">
                Self-motivated Developer experienced with a wide range of programming utilities and languages. Knowledgeable of backend and frontend development requirements. Collaborative problem-solver with an analytical mindset and excellent
                technical abilities.
              </p>
              <Link to="/resume" className="btn btn-dark" role="button">Learn more</Link>
            </blockquote>
            <hr />
          </div>


          <h2 className="mb-5 text-center">Get in touch</h2>
          <div className="row justify-content-around">
            <a href="https://github.com/irwinx16" target="_black">
              <img src="https://i.imgur.com/0Vbe5RF.png" alt="github_icon" />
            </a>
            <a href="https://www.linkedin.com/in/irwinx16/" target="_black">
              <img src="https://i.imgur.com/n9xhCX4.png" alt="linkedin_icon" />
            </a>
            <a href="mailto:irgranados16@gmail.com?subject=Interview Request - <POSITION>" target="_black">
              <img src="https://i.imgur.com/TYE6LWC.png" alt="email_icon" />
            </a>
            <a href="https://drive.google.com/file/d/1dyVZ1NQLvEVGhtl7pDSJVvrahJo1GGUN/preview" target="_black">
              <img src="https://i.imgur.com/zPMpf6Y.png" alt="resume_icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
