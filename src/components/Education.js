import React from "react";

const Education = () => {
  return (
    <section className="col-12 section education">
      <h1>Education && Experience</h1>
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
      <div className="profPath">
        <div className="workContainer lightBox firstBox">
          <p>2019</p>
          <p>Introduction to HTML, JavaScript, PHP.</p>
          <p>Belgium</p>
        </div>
        <div className="workContainer darkBox secondBox">
          <p>September, 2019 - March, 2020</p>
          <p>
            7 months training in front-end development (HTML, CSS, Javascript),
            back-end development (PHP, SQL, Adminer), systems administration
            (Linux), project management. Self-learning, autonomy, team-work.
          </p>
          <p>Charleroi, Belgium</p>
        </div>
        <div className="workContainer lightBox thirdBox">
          <p>April, 2020 - present time</p>
          <p>
            Front-end development of the lms platform (reactJS, gatsbyJS,
            nodeJS, Redis, SASS )
          </p>
          <p>Belgium</p>
        </div>
        <div className="workContainer darkBox next">
          <h2>What's next?..</h2>
        </div>
      </div>
    </section>
  );
};

export default Education;
