import React from "react";
import translate from "../i18n/translate";

const About = () => {

  return (
    <section className="aboutContainer">
      <div className="container" id="about">
        <div className="row">
          <h2 className="col-12 d-none d-lg-block">{translate("nav-about")}</h2>
          <div className="col-12 col-lg-6 message">
            <p id="message">{translate`message`}</p>
          </div>
          <div className="col-12 col-lg-6 skills">
            <ul>
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>Node.js</li>
              <li>REST</li>
              <li>GraphQL</li>
            </ul>
            <ul>
              <li>ReactJS</li>
              <li>React Router</li>
              <li>Redux</li>
              <li>Next.js</li>
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
        </div>
      </div>
    </section>
  );
};

export default About;
