import PropTypes from "prop-types";

export default function NavBar(props) {
  const { handleClick, currentPage } = props;
  return (
    // Name , Navs (about me, portfolio, contact, resume), current section must be highlighted, onclick
    <header>
      <h1>Joshua Norris</h1>
      <h2>{props.selected}</h2>
      <nav className="my-8">
        <ul className="flex justify-around gap-x-8">
          <li onClick={() => handleClick("About")}>About Me</li>
          <li onClick={() => handleClick("Portfolio")}>Portfolio</li>
          <li onClick={() => handleClick("Contact")}>Contact</li>
          <li onClick={() => handleClick("Resume")}>Resume</li>
        </ul>
      </nav>
    </header>
  );
}

NavBar.propTypes = {
  links: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleClick: PropTypes.func.isRequired,
};
