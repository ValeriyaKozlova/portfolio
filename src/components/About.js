import React from "react";
import photo from "../images/myphoto.jpg";
import Favicon from 'react-favicon';

const About = () => {
  return (
    <div className="col-10 About">
      <h1>About</h1>
      <div className="container">
        <div className="col-3 About-imgContainer">
          <img src={photo} alt="My Photo" />
        </div>
        <div className="col-9 main">
          <p>
            Hello, My name is Valeriya, and I am Russian. But now I currently
            live in Charleroi, Belgium.
          </p>
          <p>
            I have education and experience in the tourism field. During my
            studying, I worked in the USA and Turkey in the tourism domain. I
            moved to Saint-Petersburg after graduating from University. In
            December 2017 I emigrated to Belgium and started to study French.
            And now after 2 years of living here, I decided to change my
            professional path verse Web Development, because I think it's more
            fascinating and promisingly. I am interested in everything that it
            contains. Now I'm taking a Programmation course at BeCode. So I will
            be soon a junior web developer.
          </p>
          <h2>Languages</h2>
          <ul>
            <li>Russian: native</li>
            <li>English: professional working proficiency</li>
            <li>French: professional working proficiency</li>
            <li>Dutch: elementary proficiency</li>
          </ul>
              <h2>Contacts</h2>
              <ul className="li">Tel: +32 489 37 25 20</ul>
              <ul className="li">Email: kozlova.valeriya.v@gmail.com</ul>
              <ul className="li"><Favicon /></ul>
        </div>
      </div>
    </div>
  );
};

export default About;
