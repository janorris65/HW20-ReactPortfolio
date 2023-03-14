import React, { useState } from "react";
import NavBar from "./components/NavBar";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
function App() {
  const [currentPage, setCurrentPage] = useState("");
  const handleClick = (event) => {
    setCurrentPage(event);
  };

  switch (currentPage) {
    case "About":
      return (
        <>
          <NavBar
            selected={currentPage}
            handleClick={handleClick}
            // currentPage={currentPage}
          />
          <AboutMe />
        </>
      );
    case "Contact":
      return (
        <>
          <NavBar
            selected={currentPage}
            handleClick={handleClick}
            // currentPage={currentPage}
          />
          <Contact />
        </>
      );
    case "Resume":
      return (
        <>
          <NavBar
            selected={currentPage}
            handleClick={handleClick}
            // currentPage={currentPage}
          />
          <Resume />
        </>
      );
    case "Portfolio":
      return (
        <>
          <NavBar
            selected={currentPage}
            handleClick={handleClick}
            // currentPage={currentPage}
          />
          <Portfolio />
        </>
      );
  }
  return (
    <NavBar
      selected={currentPage}
      handleClick={handleClick}
      // currentPage={currentPage}
    />
  );
}

export default App;
