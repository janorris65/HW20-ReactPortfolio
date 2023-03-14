import { useState } from "react";
import NavBar from "./components/NavBar";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
function App() {
  const [currentPage, setCurrentPage] = useState("About");
  const handleClick = (event) => {
    setCurrentPage(event);
  };
  let response;
  let bgcolor1;
  let bgcolor2;
  let bgcolor3;
  let bgcolor4;
  switch (currentPage) {
    case "About":
      response = <AboutMe />;
      bgcolor1 = "bg-teal-300";
      break;
    case "Contact":
      response = <Contact />;
      bgcolor3 = "bg-teal-300";
      break;
    case "Resume":
      response = <Resume />;
      bgcolor4 = "bg-teal-300";
      break;
    case "Portfolio":
      response = <Portfolio />;
      bgcolor2 = "bg-teal-300";
      break;
  }
  return (
    <>
      <NavBar
        selected={currentPage}
        handleClick={handleClick}
        color1={bgcolor1}
        color2={bgcolor2}
        color3={bgcolor3}
        color4={bgcolor4}
      />
      {response}
      <Footer />
    </>
  );
}

export default App;
