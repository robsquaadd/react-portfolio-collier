import React from "react";
import instagram from "../assets/images/instagram.jpg";
import github from "../assets/images/github.png";
import linkedin from "../assets/images/linkedin-logo.png";

function Footer() {
  return (
    <footer>
      <div className="footerDiv">
        <a href="https://www.instagram.com/robsquaadd/">
          <img
            src={instagram}
            width="30px"
            height="30px"
            alt="instagram logo"
          ></img>
        </a>
        <a href="https://www.github.com/robsquaadd/">
          <img src={github} width="30px" height="30px" alt="github logo"></img>
        </a>
        <a href="https://www.linkedin.com/in/robert-collier-95058816b/">
          <img
            src={linkedin}
            width="30px"
            height="30px"
            alt="linkedin-logo"
          ></img>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
