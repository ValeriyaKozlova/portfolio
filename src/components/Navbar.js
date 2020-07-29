import React from "react";
import { NavLink } from "react-router-dom";

function Navbar({activeLangue, setActiveLangue}) {
  return (
    <div className="navbar">
      <div>
        <button
        className={activeLangue === "en" ? "activeLangue" : ""}
        onClick={() => setActiveLangue('en')}
        >EN</button>
        <button
        className={activeLangue === "fr" ? "activeLangue" : ""}
        onClick={() => setActiveLangue('fr')}
        >FR</button>
        <button
        className={activeLangue === "ru" ? "activeLangue" : ""}
        onClick={() => setActiveLangue('ru')}>RU</button>
      </div>
      <nav className="Navigation" id="navbar">
        <NavLink to="/about" activeClassName="active-link">
          About
        </NavLink>
        <NavLink activeClassName="active-link" to="/education-experience">
          Edu. && EX
        </NavLink>
        <NavLink activeClassName="active-link" to="/projects">
          Projects
        </NavLink>
      </nav>
      <div className="contact">
        <a
          href="https://www.facebook.com/valeriya.kozlova.73"
          target="_blank"
          rel="noopener noreferrer"
        >
          f
        </a>
        <a
          href="https://www.linkedin.com/in/valeriya-kozlova-v/"
          target="_blank"
          rel="noopener noreferrer"
        >
          in
        </a>
        <a
          href="https://github.com/ValeriyaKozlova"
          target="_blank"
          rel="noopener noreferrer"
        >
          git
        </a>
        {/* <a className="email" href="mailto: kozlova.valeriya.v@gmail.com">
          kozlova.valeriya.v@gmail.com
        </a> */}
      </div>
    </div>
  );
}

export default Navbar;
