import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { NavHashLink } from 'react-router-hash-link';
import { LOCALES } from "../i18n";
import translate from "../i18n/translate";
import Logo from "./Logo";
import ButtonToggle from "./reusable-components/Button-toggle";


function Navbar({ activeLangue, setActiveLangue }) {
  const ref = useRef(null)
  const [mobileNavOpen, setMobileNavOpen] = useState(false)

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

  const handleOpenNav = () => {
    setMobileNavOpen(prev => !prev)
  }

  useEffect(() => {
    mobileNavOpen ? document.body.style.overflow = "hidden" : document.body.style.overflow = "visible";
  }, [mobileNavOpen])

  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -80;
    if (mobileNavOpen) {
      setMobileNavOpen(prev => !prev)
    }
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
  }

  return (
    <header ref={ref} className={mobileNavOpen ? 'blocked' : 'unBlocked'}>
      <nav className="navbar">
        <button onClick={() => handleOpenNav()} className="navbar-button" aria-label="Toggle navigation">
          <span className={mobileNavOpen ? "button-toggle-top open" : "button-toggle-top"}></span>
          <span className={mobileNavOpen ? "button-toggle-bottom open" : "button-toggle-bottom"}></span>
        </button>
        <NavHashLink
          smooth
          to="/#"
          aria-label="Home page"
        >
          <Logo />
        </NavHashLink>
        <div className="navigation">
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
        <div className={mobileNavOpen ? "mobile-navigation open" : "mobile-navigation closed"}>
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
            scroll={el => scrollWithOffset(el)}
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
      </nav>
    </header>
  );
}

export default Navbar;
