import React from "react";
import translate from "../i18n/translate";
import Navbar from "./Navbar";
import LogoAnimated from "./LogoAnimated";
import { LOCALES } from "../i18n";

function Footer({ activeLangue, setActiveLangue }) {
  return (
    <footer className="container d-lg-none">
      <div className="svgContainer-mobile d-lg-none">
        <LogoAnimated />
      </div>
      <div className="row">
        <div className="contact col-12">
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
          <a className="cv" href="/images/myw3schoolsimage.jpg" download>
            {translate("download")}
          </a>
          <a className="email" href="mailto: kozlova.valeriya.v@gmail.com">
            kozlova.valeriya.v@gmail.com
          </a>
        </div>
        <div className="col-12 navbar-nav">
          <Navbar
            activeLangue={activeLangue}
            setActiveLangue={setActiveLangue}
          />
        </div>
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
      {/* <div className="contact d-none d-lg-block">
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
      </div> */}
    </footer>
  );
}

export default Footer;
