import React from "react";
import { NavHashLink } from "react-router-hash-link";
import translate from "../i18n/translate";
import { scrollWithOffset } from "../utils/scroll";

const GreetingArea = () => {
  return (
    <section className="greetingArea">
      <video autoPlay loop muted playsInline id="video" >
        <source src="omsbg.mp4" type="video/mp4" />
        <p>Your browser does not support the video tag.</p>
      </video>
      <div id="filter"></div>
      <div id="greeting">
        <h1>{translate("greeting-1")} <span>{translate("greeting-2")}</span>
          <p>{translate("greeting-3")}</p></h1>
        <button>
          <NavHashLink
            scroll={el => scrollWithOffset(el)}
            to="/portfolio/#projects">
            {translate("nav-projects")}
          </NavHashLink>
        </button>
      </div>
    </section>
  );
};

export default GreetingArea;
