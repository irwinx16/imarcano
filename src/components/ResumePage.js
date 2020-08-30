import React from "react";

export const ResumePage = () => {
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-sm-12">
          <h1 className="display-4">Irwin Marcano</h1>
          <hr />
          <h3 className="lead">Web Developer</h3>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-sm-12 col-md-4">
          <h3>
            Skills
            <hr />
          </h3>
          <p>
            <ul className="list-unstyled">
              <li>Python, Flask, Ruby,</li>
              <li>Rails, JavaScript, React,</li>
              <li>NodeJs, ExpressJs, AWS,</li>
              <li>PostgreSQL, Heroku, Git,</li>
              <li>HTML, Bootstrap, CSS,</li>
              <li>Problem-Solving, Research</li>
              <li>Fluent in Spanish</li>
            </ul>
          </p>
          <h3 className="mt-5">
            Education
            <hr />
          </h3>
          <p>
            <span className="font-weight-bold">General Assembly</span> <br />
            <span>Web Development Immersive</span> <br />
            <span className="font-italic">Certificate</span> <br />
            <span className="font-weight-lighter small">Mar 2018 - Jun 2018</span>
          </p>
          <p>
            <span className="font-weight-bold">Harry S. Truman College</span> <br />
            <span>Adult Education Coursework</span> <br />
            <span className="font-italic">Vocational</span> <br />
            <span className="font-weight-lighter small">Nov 2016 - Dec 2017</span>
          </p>
          <p>
            <span className="font-weight-bold">Rodolfo Loero Arismendi Institute of Technology</span> <br />
            <span>Human Resources Management</span> <br />
            <span className="font-italic">Associates Degree</span> <br />
            <span className="font-weight-lighter small">Sep 2010 - May 2014</span>
          </p>
        </div>
        <div className="col-sm-12 col-md-8">
          <h3>
            Summary
            <hr />
          </h3>
          <p>
            Certified Web Developer with skills in Front-End Development using HTML, CSS, JavaScript, and React. Experience with object-oriented programming using Python Flask and Ruby on Rails; Cloud Computing knowledge with deploying applications
            to AWS and Version Control. I’d love to explore new ways technology can be used to improve the world and collaborate with others to make it happen.
          </p>
          <h3 className="mt-5">
            Experience
            <hr />
          </h3>
          <div id="ta_nu" className="mb-4">
            <p>
              <span className="font-weight-bold">Trilogy Education, ​</span>
              <span className="font-italic">​Teaching Assistant - Web Development Bootcamp</span> <br />
              <span className="font-weight-lighter small">Jun 2020 - Present | Chicago, IL.</span>
            </p>
            <p>
              <ul>
                <li>Assist students with activities and projects regarding front-end and back-end technologies</li>
              </ul>
            </p>
          </div>

          <div id="freelancer" className="mb-4">
            <p>
              <span className="font-weight-bold">Freelance Web Development, ​</span>
              <span className="font-italic">​Web Developer</span> <br />
              <span className="font-weight-lighter small">Feb 2019 - Present | Chicago, IL.</span>
            </p>
            <p>
              <ul>
                <li>Developed full static websites in Squarespace; Implemented additional features using jQuery, and CSS according to client needs</li>
                <li>Built mobile responsive website using HTML, CSS, Bootstrap, and Javascript. Knowledge of VueJs for Web Apps, deployment to Github, and use of Gulp for faster development</li>
                <li>Development and maintenance of CMS, Websites and Web Applications using front-end technologies</li>
              </ul>
            </p>
          </div>

          <div id="general_assembly" className="mb-4">
            <p>
              <span className="font-weight-bold">General Assembly,​ </span>
              <span className="font-italic">​Web Development Course</span> <br />
              <span className="font-weight-lighter small">March 2018 - June 2018 | Chicago, IL.</span>
            </p>
            <p>
              <span className="font-weight-bold">Parking App ​|​ Check for Parking Restrictions</span>
            </p>
            <p>
              <ul>
                <li>Coded AJAX call to Chicago API and linked response to Google Maps</li>
                <li>Wrote code to test JSON responses were correct</li>
                <li>Used Version Control technologies for collaboration</li>
                <li>Created and styled forms and logic for frontend templates</li>
              </ul>
            </p>
            <p>
              <span className="font-weight-bold">Technologies used:</span> <br />
              NodeJS, ExpressJS, MongoDB, JavaScript, HTML, Bootstrap, CSS
            </p>
            <p>
              <span className="font-weight-bold">EMS | Schedule and Manage your employees</span>
            </p>
            <p>
              <ul>
                <li>Built Backend RESTfull API controllers and models</li>
                <li>Collaborated in creating and styling React frontend</li>
                <li>Used Version Control to keep the project up to date</li>
                <li>Created SQL database to store and retrieve data</li>
              </ul>
            </p>
            <p>
              <span className="font-weight-bold">Technologies used:</span> <br />
              Ruby, Sinatra, PostgreSQL, JavaScript, React, HTML, Bootstrap, Git
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
