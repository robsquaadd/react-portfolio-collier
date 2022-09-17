import React, { useState } from "react";
import yardSale from "../assets/images/yardSale.jpg";
import concertImage1bw from "../assets/images/concertImg1bw.jpeg";
import credible from "../assets/images/credible.png";

function Portfolio() {
  const [portfolioProjects] = useState([
    {
      name: "funzip",
      link: "https://robsquaadd.github.io/home-zip/",
      github: "https://github.com/robsquaadd/home-zip",
      image: concertImage1bw,
    },
    {
      name: "the front yard",
      link: "https://the-front-yard.herokuapp.com/",
      github: "https://github.com/robsquaadd/the-front-yard",
      image: yardSale,
    },
    {
      name: "credible",
      link: "www.google.com",
      github: "https://github.com/quicksilver524/credible",
      image: credible,
    },
  ]);
  return (
    <div id="portfolio-section">
      {portfolioProjects.map((project, index) => (
        <div
          key={index}
          id={`${project.name}+${index}`}
          className="project-card"
        >
          <img src={project.image} alt={project.name}></img>
          <h3>{project.name}</h3>
          <button type="button" className="submit-btn">
            <a href={`${project.github}`}>Github</a>
          </button>
          <button type="button" className="submit-btn">
            <a href={`${project.link}`}>Project</a>
          </button>
        </div>
      ))}
    </div>
  );
}

export default Portfolio;
