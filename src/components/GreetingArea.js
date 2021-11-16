import React from "react";
import translate from "../i18n/translate";

const GreetingArea = () => {
  return (
    <section className="greetingArea">
      <video autoPlay muted loop id="video" >
        <source src="OMSBG7.mov" type="video/mp4" />
        <p>Your browser does not support the video tag.</p>
      </video>
      <div id="filter"></div>
      <div id="greeting">
        <h1>{translate("greeting-1")} <span>{translate("greeting-2")}</span>
          <p>{translate("greeting-3")}</p></h1>
        <button>
          {translate("nav-projects")}
        </button>
      </div>
    </section>
  );
};

export default GreetingArea;
