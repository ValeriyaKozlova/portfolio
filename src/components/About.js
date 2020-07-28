import React from "react";
import MyPhoto from '../images/me.png'
const About = () => {
  return (
    <section className="col-12 section about">
      <div className="animation">
        <h1> SALUT! </h1> 
        <h1>I am VALERIYA, </h1>
        <h1>junior Web Developer</h1>
        <div className="overlay"></div>
      </div>
      <img alt="myPhoto" className="absolute img" src={MyPhoto} />
    </section>
  );
};

export default About;
