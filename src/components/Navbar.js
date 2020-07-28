import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <div className="buttons">
        <button>EN</button>
        <button>FR</button>
        <button>RU</button>
      </div>
      <nav className="Navigation" id="navbar">
        <NavLink to="/about" activeClassName="active-link">
          About
        </NavLink>
        <NavLink activeClassName="active-link" to="/education-experience">
          Education && Experience
        </NavLink>
        <NavLink activeClassName="active-link" to="/skills">
          Skills
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
