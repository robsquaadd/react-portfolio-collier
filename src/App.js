import "./App.css";
import React, { useState } from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";

function App() {
  const [currentPage, setCurrentPage] = useState("about");
  return (
    <div className="app-container">
      <Nav currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="main-container">
        {currentPage === "about" && <About />}
        {currentPage === "portfolio" && <Portfolio />}
        {currentPage === "resume" && <Resume />}
        {currentPage === "contact" && <Contact />}
      </main>
      <Footer />
    </div>
  );
}

export default App;
