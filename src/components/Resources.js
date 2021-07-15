import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import zoomGuideFile from "../markdowns/zoomGuide.md";

export const Resources = () => {
  const [zoomGuide, setZoomGuide] = useState("");

  useEffect(() => {
    fetch(zoomGuideFile)
      .then((res) => res.text())
      .then((text) => setZoomGuide(text));
  }, []);
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-sm-12">
          <ReactMarkdown children={zoomGuide} />
        </div>
      </div>
    </div>
  );
};
