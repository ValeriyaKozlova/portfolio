import React, {useState} from 'react'
import { NavHashLink as NavLink } from 'react-router-hash-link';

function Navbar() {
    const [active, setActive] = useState("about");
    
    return (
        <div className="container-fluid Navigation">
        <nav className="container Navigation" id="navbar">
          {/* <a href="#about">About</a> */}
        <NavLink
          to="/#about"
          activeClassName="selected"
        //   onClick={() => setActive("about")}
        >
        About
        </NavLink>
        <NavLink
          activeClassName="selected"
          to="/#education"
        //   onClick={() => setActive("education")}
        >
            {/* {active === "education" ? <img src={ActiveArrow} alt="arrow right" className="activeImage"/> : "Education"} */}
            Education && Experience
        </NavLink>
        <NavLink
          activeClassName="selected"
          to="/#skills"
        //   onClick={() => setActive("skills")}
        >
           {/* {active === "skills" ? <img src={ActiveArrow} alt="arrow right" className="activeImage"/> : "Skills"} */}
           Skills
        </NavLink>
        <NavLink
          activeClassName="selected"
          to="/#projects"
        //   onClick={() => setActive("projects")}
        >
          {/* {active === "projects" ? <img src={ActiveArrow} alt="arrow right" className="activeImage"/> : "Projects"} */}
          Projects
        </NavLink>
        <NavLink
          activeClassName="selected"
          to="/#contacts"
        //   onClick={() => setActive("projects")}
        >
          {/* {active === "projects" ? <img src={ActiveArrow} alt="arrow right" className="activeImage"/> : "Projects"} */}
          Contacts
        </NavLink>
        <div className="buttons">
        <button>EN</button>
        <button>FR</button>
        <button>RU</button>
        </div>
        </nav>
      </div>
    )
}

export default Navbar
