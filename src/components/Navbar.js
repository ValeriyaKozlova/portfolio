import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { LOCALES } from "../i18n";
import translate from "../i18n/translate";
import Logo from "./Logo";

function Navbar({ activeLangue, setActiveLangue }) {
  const ref = useRef(null)

  const [scroll, setScroll] = useState(0)
  const handleScroll = () => {

  }
  useLayoutEffect(() => {
    let active = false
    const onScroll = () => {
      if (window.scrollY > 0 && !active) {
        console.log("hello")
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

  return (
    <header ref={ref}>
      <nav className="navbar">
        <Logo />
        <div className="navigation" id="navbar">
          <NavLink exact to="/#about" activeClassName="active-link">
            {translate("nav-about")}
          </NavLink>
          <NavLink activeClassName="active-link" exact to="/#education-experience">
            {translate("nav-exp")}
          </NavLink>
          <NavLink activeClassName="active-link" exact to="/#projects">
            {translate("nav-projects")}
          </NavLink>
        </div>
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
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
