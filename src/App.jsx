import React, { useState } from "react";
import NavBar from "./components/NavBar";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
function App() {
  const [currentPage, setCurrentPage] = useState("");
  const handleClick = (event) => {
    setCurrentPage(event);
  };
  let response;
  switch (currentPage) {
    case "About":
      response = <AboutMe />;
      break;
    case "Contact":
      response = <Contact />;
      break;
    case "Resume":
      response = <Resume />;
      break;
    case "Portfolio":
      response = <Portfolio />;
      break;
  }
  return (
    <>
      <NavBar
        selected={currentPage}
        handleClick={handleClick}
        // currentPage={currentPage}
      />
      <div>{response}</div>
      <Footer />
    </>
  );
}

export default App;
