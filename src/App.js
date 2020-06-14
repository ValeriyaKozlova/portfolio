import React, { useState } from "react";
import { Route, Switch, NavLink } from "react-router-dom";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import About from "./components/About";
import ActiveArrow from "./images/arrows.png";
import Favicon from 'react-favicon';
import "./styles/App.css";

function App() {
  const [active, setActive] = useState({
    about: false,
    education: false,
    experience: false,
    skills: false,
    projects: false,
  });

  function handleClick(e) {
    // const updatedActive = active.map(item => {
    //   // if(e.target.name === item) {
    //    return  console.log(item)
    //   // }
    // })
    setActive({
      ...active, [e.target.name] : true
    })
  }
  return (
    <div className="container">
      <nav className="Navigation col-1">
        <NavLink
          name="about"
          exact
          activeClassName="active-link"
          to="/"
          onClick={(e) => handleClick(e)}
        >
          {active.about ? <img src={ActiveArrow} alt="arrow right" className="activeImage"/> : "About"}
        </NavLink>
        <NavLink
          name="education"
          exact
          activeClassName="active-link"
          to="/education"
          onClick={(e) => handleClick(e)}
        >
            {active.education ? <img src={ActiveArrow} alt="arrow right" className="activeImage"/> : "Education"}
        </NavLink>
        <NavLink
          name="experience"
          exact
          activeClassName="active-link"
          to="/experience"
          onClick={(e) => handleClick(e)}
        >
          {active.experience ? <img src={ActiveArrow} alt="arrow right" className="activeImage"/> : "Experience"}
        </NavLink>
        <NavLink
          name="skills"
          exact
          activeClassName="active-link"
          to="/skills"
          onClick={(e) => handleClick(e)}
        >
           {active.skills ? <img src={ActiveArrow} alt="arrow right" className="activeImage"/> : "Skills"}
        </NavLink>
        <NavLink
          name="projects"
          exact
          activeClassName="active-link"
          to="/projects"
          onClick={(e) => handleClick(e)}
        >
          {active.projects ? <img src={ActiveArrow} alt="arrow right" className="activeImage"/> : "Projects"}
        </NavLink>
      </nav>
      <Switch>
        <Route exact path="/" component={About} />
        <Route exact path="/education" component={Education} />
        <Route exact path="/experience" component={Experience} />
        <Route exact path="/skills" component={Skills} />
        <Route exact path="/projects" component={Projects} />
      </Switch>
    </div>
  );
}

export default App;
