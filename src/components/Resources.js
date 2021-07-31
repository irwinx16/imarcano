import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import zoomGuideFile from "../markdowns/zoomGuide.md";
import slackGuideFile from "../markdowns/slackGuide.md";
import githubGuideFile from "../markdowns/githubGuide.md";

export const Resources = () => {
  const [zoomGuide, setZoomGuide] = useState("");
  const [slackGuide, setSlackGuide] = useState("");
  const [gihubGuide, setGithubGuide] = useState("");

  useEffect(() => {
    fetch(zoomGuideFile)
      .then((res) => res.text())
      .then((text) => setZoomGuide(text));

    fetch(slackGuideFile)
      .then((res) => res.text())
      .then((text) => setSlackGuide(text));

    fetch(githubGuideFile)
      .then((res) => res.text())
      .then((text) => setGithubGuide(text));
  }, []);
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-sm-12">
          <div id="accordion">
            {/* --------Card Block---------- */}
            <div className="card">
              <div className="card-header" id="headingOne">
                <h5 className="mb-0">
                  <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Zoom Guides and Tips
                  </button>
                </h5>
              </div>

              <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                <div className="card-body">
                  <ReactMarkdown children={zoomGuide} />
                </div>
              </div>
            </div>

            {/* --------Card Block---------- */}
            <div className="card">
              <div className="card-header" id="headingTwo">
                <h5 className="mb-0">
                  <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Slack Guide
                  </button>
                </h5>
              </div>
              <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                <div className="card-body">
                  <ReactMarkdown children={slackGuide} />
                </div>
              </div>
            </div>

            {/* --------Card Block---------- */}
            <div className="card">
              <div className="card-header" id="headingThree">
                <h5 className="mb-0">
                  <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    GitHub Guide
                  </button>
                </h5>
              </div>
              <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                <div className="card-body">
                  <ReactMarkdown children={gihubGuide} />
                </div>
              </div>
            </div>
            {/* --------Card Block---------- */}
          </div>
        </div>
      </div>
    </div>
  );
};
