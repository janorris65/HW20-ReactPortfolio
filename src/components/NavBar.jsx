import PropTypes from "prop-types";

export default function NavBar(props) {
  const { handleClick } = props;
  return (
    // Name , Navs (about me, portfolio, contact, resume), current section must be highlighted, onclick
    <header className="flex justify-center gap-x-10 rounded-2xl border-8 border-green-900 bg-slate-300 py-2 drop-shadow-md">
      <h1 className="font-serif text-2xl ">Joshua Norris</h1>
      <h2 className="font-serif">{props.selected}</h2>
      <nav className="">
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
  color1: PropTypes.any,
  color2: PropTypes.any,
  color3: PropTypes.any,
  color4: PropTypes.any,
  selected: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleClick: PropTypes.func.isRequired,
};
