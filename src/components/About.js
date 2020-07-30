import React from "react";
import MyPhoto from "../images/me.png";
import translate from "../i18n/translate";

const About = () => {
  return (
    <section className="col-12 about">
      <div className="animation">
        <h1> {translate("greeting-1")} </h1>
        <h1> {translate("greeting-2")} </h1>
        <h1> {translate("greeting-3")} </h1>
        <div className="overlay"></div>
      </div>
      <div className="skills">
        <ul>
          <li>JavaScript</li>
          <li>Reactjs</li>
          <li>Gatsby</li>
          <li>Nodejs</li>
        </ul>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>SASS</li>
          <li>Bootstrap</li>
          <li>Materialize</li>
        </ul>
        <ul>
          <li>Git</li>
          <li>Figma</li>
        </ul>
      </div>
      <img alt="myPhoto" className="absolute img" src={MyPhoto} />
    </section>
  );
};

export default About;
