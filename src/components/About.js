import React from "react";
import MyPhoto from '../images/me.png'
const About = ({activeLangue}) => {
  return (
    <section className="col-12 section about">
      <div className="animation">
        <h1> {activeLangue === "en" ? "Hello!" : activeLangue === "fr" ? "Salut!" : "Привет"} </h1> 
        <h1> {activeLangue === "en" ? "I am VALERIYA," : activeLangue === "fr" ? "Je suis Valeriya," : "Меня зовут Валерия,"} </h1>
        <h1> {activeLangue === "en" ? "junior Web Developer" : activeLangue === "fr" ? "développeur web junior" : "младший веб разработчик"} </h1> 
        <div className="overlay"></div>
      </div>
      <div className="devTools">
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
