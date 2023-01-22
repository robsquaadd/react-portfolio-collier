import React from "react";
import denver from "../assets/images/robert-denver.jpg";

function aboutMe() {
  return (
    <div id="about-me-container">
      <p>
        I'm a full-stack software developer from Bradenton, FL. I graduated with
        an engineering degree from the University of Florida in 2018 and then
        worked for a year and a half as a Technical Services Engineer at Epic
        Systems before teaching a wide variety of subjects including
        engineering, robotics, chemistry, and mathematics at Lakewood Ranch High
        School. <br></br>
        <br></br> I'm looking to continue my full-stack development career
        working on impactful projects, collaborating with a team on which I have
        indispensable value, and creating applications that provide an
        unforgettable web experience to the consumers.
        <br></br>
        <br></br>
        If you are looking to complete a development project or would like to
        connect further, then please email me at robert.collier.120@gmail.com,
        or add me on any of the social media networks that I have linked in the
        lower right hand corner of this page.
      </p>
      <div className="aboutImg">
        <img src={denver} alt="robert in denver" className="image"></img>
      </div>
    </div>
  );
}

export default aboutMe;
