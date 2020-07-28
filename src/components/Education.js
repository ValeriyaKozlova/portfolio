import React from "react";

const Education = () => {
  return (
    <section className="col-12 section education" id="education">
      <h1>Education && Experience</h1>
      <div className="profPath">
        <div className="workContainer">
          <h2>Technofuture TIC, Belgium</h2>
          <p>2019</p>
          <p>Introduction to HTML, JavaScript, PHP.</p>
        </div>
        <div className="workContainer">
          <h2>BeCode, Charleroi, Belgium</h2>
          <p>September, 2019 - March, 2020</p>
          <p>
            7 months training in front-end development (HTML, CSS, Javascript),
            back-end development (PHP, SQL, Adminer), systems administration
            (Linux), project management. Self-learning, autonomy, team-work.
          </p>
        </div>
        <div className="workContainer">
          <h2>Blooming riders, Belgium</h2>
          <p>April, 2020 - present time</p>
          <p>
            Front-end development of the lms platform (reactJS, gatsbyJS,
            nodeJS, Redis, SASS )
          </p>
        </div>
      </div>
      <div className="message">
        <p id="message">
          I have education and experience in the tourism field. But after moving
          to Belgium in the end of 2017, I decided to change my professional
          path verse Web Development. I am interested in everything that it
          contains. In March 2020, I finished a Programmation course at BeCode.
          Now I'm currently doing an internship at BloomingRiders. I love
          JavaScript, and ReactJs is the main technology I work with.
        </p>
      </div>
    </section>
  );
};

export default Education;
