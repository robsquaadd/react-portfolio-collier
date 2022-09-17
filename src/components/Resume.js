import React from "react";
import Resume2020 from "../assets/images/Resume2020.pdf";

function Resume() {
  return (
    <div id="resume-section">
      <h2>Download My Resume Here!</h2>
      <br></br>
      <button type="button" className="submit-btn resume-btn">
        <a href={Resume2020}>Download!</a>
      </button>
    </div>
  );
}

export default Resume;
