import React, { useLayoutEffect, useRef } from "react";
import { NavHashLink } from 'react-router-hash-link';
import { LOCALES } from "../i18n";
import translate from "../i18n/translate";
import { scrollWithOffset } from "../utils/scroll";
import Logo from "./Logo";

function Navbar({ activeLangue, setActiveLangue }) {
  const ref = useRef(null)

  useLayoutEffect(() => {
    let active = false
    const onScroll = () => {
      if (window.scrollY > 0 && !active) {
        ref.current.classList.add("active");
        active = true
      } else if (window.scrollY === 0) {
        ref.current.classList.remove("active");
        active = false
      }
    }
    window.addEventListener("scroll", onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  const handleLang = (lang) => {
    setActiveLangue(lang)
    localStorage.setItem('language', lang)
  }

  return (
    <header ref={ref}>
      <nav className="navbar-expand-md navbar">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <NavHashLink
            smooth
            to="/#"
          >
            <Logo />
          </NavHashLink>
          <div className="navigation" id="navbar">
            <NavHashLink
              scroll={el => scrollWithOffset(el)}
              to="/#about">
              {translate("nav-about")}
            </NavHashLink>
            <NavHashLink
              scroll={el => scrollWithOffset(el)}
              to="/#education">
              {translate("nav-exp")}
            </NavHashLink>
            <NavHashLink
              scroll={el => scrollWithOffset(el)}
              to="/#projects">
              {translate("nav-projects")}
            </NavHashLink>
            <NavHashLink
              smooth
              to="/#contacts">
              {translate("contacts")}
            </NavHashLink>
          </div>
          <div className="buttons">
            <button
              className={activeLangue === "en" ? "activeLangue" : ""}
              onClick={() => handleLang(LOCALES.ENGLISH)}
            >
              EN
        </button>
            <button
              className={activeLangue === "fr" ? "activeLangue" : ""}
              onClick={() => handleLang(LOCALES.FRENCH)}
            >
              FR
        </button>
            <button
              className={activeLangue === "ru" ? "activeLangue" : ""}
              onClick={() => handleLang(LOCALES.RUSSIAN)}
            >
              RU
        </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
