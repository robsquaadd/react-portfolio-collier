import React from "react";

function Nav({ setCurrentPage }) {
  return (
    <header>
      <h1>robert collier</h1>
      <ul className="navList">
        <li onClick={() => setCurrentPage("about")}>about me</li>
        <li onClick={() => setCurrentPage("portfolio")}>portfolio</li>
        <li onClick={() => setCurrentPage("contact")}>contact</li>
        <li onClick={() => setCurrentPage("resume")}>resume</li>
      </ul>
    </header>
  );
}

export default Nav;
