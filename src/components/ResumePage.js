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
            Self-motivated Developer experienced with a wide range of programming utilities and languages. Knowledgeable of backend and frontend development requirements. Collaborative problem-solver with an analytical mindset and excellent technical
            abilities.
          </p>

          <h3 className="mt-5">
            Experience
            <hr />
          </h3>
          <div id="ta_nu" className="mb-4">
            <p>
              <span className="font-weight-bold">Trilogy Education, ​</span>
              <span className="font-italic">​Web Development Teaching Assistant</span> <br />
              <span className="font-weight-lighter small">Jun 2020 - Present | Chicago, IL.</span>
            </p>
            <ul>
              <li>Troubleshoot student’s issues during classes.</li>
              <li>Performed special demos of Version Control for collaboration and use of React Hooks to help students with their projects.</li>
            </ul>
          </div>

          <div id="freelancer" className="mb-4">
            <p>
              <span className="font-weight-bold">Freelance Web Development, ​</span>
              <span className="font-italic">​Web Developer</span> <br />
              <span className="font-weight-lighter small">Feb 2019 - Present | Chicago, IL.</span>
            </p>
            <ul>
              <li>Use jquery and other technologies to make line-code repairs based on requirements and understanding of the client’s needs.</li>
              <li>Provide front-end website development using HTML, JavaScript, and Content Management Systems.</li>
              <li>Perform web testing and troubleshooting before live deployment.</li>
              <li>Research new technologies and software packages for use in website projects.</li>
            </ul>
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
            <ul>
              <li>Wrote AJAX to Chicago API to be used with Google Maps.</li>
              <li>Wrote code to validate JSON response.</li>
              <li>Developed code collaboratively using Version Control.</li>
              <li>Developed user interface with modern framework.</li>
            </ul>
            <p>
              <span className="font-weight-bold">Technologies used:</span> <br />
              NodeJS, ExpressJS, MongoDB, JavaScript, HTML, Bootstrap, CSS
            </p>

            <p>
              <span className="font-weight-bold">EMS | Schedule and Manage your employees</span>
            </p>
            <ul>
              <li>Developed Backend RESTful API controllers and models.</li>
              <li>Collaborated on creating and styling React frontend.</li>
              <li>Used Version Control to keep the project up to date.</li>
              <li>Created SQL database to store and retrieve data.</li>
            </ul>
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
