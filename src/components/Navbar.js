import React from "react";
import { NavLink } from "react-router-dom";
import { LOCALES } from "../i18n";
import translate from "../i18n/translate";
import Logo from "./Logo";
import LogoAnimated from './LogoAnimated'

function Navbar({ activeLangue, setActiveLangue }) {
  return (
    <div className="navbar-nav">
      <div className="buttons">
        <button
          className={activeLangue === "en" ? "activeLangue" : ""}
          onClick={() => setActiveLangue(LOCALES.ENGLISH)}
        >
          EN
        </button>
        <button
          className={activeLangue === "fr" ? "activeLangue" : ""}
          onClick={() => setActiveLangue(LOCALES.FRENCH)}
        >
          FR
        </button>
        <button
          className={activeLangue === "ru" ? "activeLangue" : ""}
          onClick={() => setActiveLangue(LOCALES.RUSSIAN)}
        >
          RU
        </button>
        <Logo />
      </div>
      <nav className="Navigation" id="navbar">
        <NavLink exact to="/" activeClassName="active-link">
          {translate("nav-about")}
        </NavLink>
        <NavLink activeClassName="active-link" exact to="/education-experience">
          {translate("nav-exp")}
        </NavLink>
        <NavLink activeClassName="active-link" exact to="/projects">
          {translate("nav-projects")}
        </NavLink>
      </nav>
      <div className="contact d-none d-lg-block">
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
        <a className="email" href="mailto: kozlova.valeriya.v@gmail.com">
          kozlova.valeriya.v@gmail.com
        </a>
        <a className="cv" href="/images/myw3schoolsimage.jpg" download>
          {translate("download")}
        </a>
      </div>
      <div className="svgContainer-mobile d-lg-none">
      <LogoAnimated />
      </div>
    </div>
  );
}

export default Navbar;
