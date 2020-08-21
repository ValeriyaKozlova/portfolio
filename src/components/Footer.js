import React from "react";
import translate from "../i18n/translate";
import Navbar from "./Navbar";
import LogoAnimated from "./LogoAnimated";

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
    </footer>
  );
}

export default Footer;
