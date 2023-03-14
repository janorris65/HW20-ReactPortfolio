import PropTypes from "prop-types";

export default function NavBar(props) {
  const { handleClick, currentPage } = props;
  return (
    // Name , Navs (about me, portfolio, contact, resume), current section must be highlighted, onclick
    <header className="bg-slate-300">
      <h1>Joshua Norris</h1>
      <h2>{props.selected}</h2>
      <nav className="my-8">
        <ul className="flex justify-around gap-x-8">
          <li
            className={props.color1}
            onClick={() => handleClick("About")}
            aria-hidden="true"
          >
            About Me
          </li>
          <li
            className={props.color2}
            onClick={() => handleClick("Portfolio")}
            aria-hidden="true"
          >
            Portfolio
          </li>
          <li
            className={props.color3}
            onClick={() => handleClick("Contact")}
            aria-hidden="true"
          >
            Contact
          </li>
          <li
            className={props.color4}
            onClick={() => handleClick("Resume")}
            aria-hidden="true"
          >
            Resume
          </li>
        </ul>
      </nav>
    </header>
  );
}

NavBar.propTypes = {
  selected: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleClick: PropTypes.func.isRequired,
};
