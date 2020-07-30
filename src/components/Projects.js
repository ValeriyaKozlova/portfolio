import React from "react";
import A6K from "../images/a6k.png";
import Ancubator from "../images/ancubator.png";
import translate from '../i18n/translate'

const Projects = () => {
  return (
    <section className="col-12 container projects">
      <h1 className="col-12">Projects</h1>
      <div className="col-12">
        <div className="flex">
          <div className="img-container">
            <img src={A6K} alt="screenshot of a6k site" />
            <div className="projectInfo">
            <p>{translate('a6k')}</p>
              <button><a href="https://www.a6k.be/home/" target="_blank" rel="noopener noreferrer">Visit the site</a></button>
            </div>
            <h2 className="projectTitle">A6K</h2>
          </div>
          <div className="img-container">
            <img src={Ancubator} alt="screenshot of ancubator site" />
            <div className="projectInfo">
              <p>{translate('ancubator')}</p>
              <button><a href="https://www.ancubator.com" target="_blank" rel="noopener noreferrer">Visit the site</a></button>
            </div>
            <h2 className="projectTitle">ANCUBATOR</h2>
          </div>
        </div>
      </div>
      <div className="col-12">
        <div className="flex">
          <div className="img-container">
            <img src={A6K} alt="screenshot of a6k site" />
            <div className="projectInfo">
              <p>{translate('admin-blooming')}</p>
            </div>
            <h2 className="projectTitle">admin Panel BR</h2>
          </div>
          <div className="img-container">
            <img src={Ancubator} alt="screenshot of ancubator site" />
            <div className="projectInfo">
            <p>{translate('blooming')}</p>
              <button><a href="https://www.ancubator.com" target="_blank" rel="noopener noreferrer">Visit the site</a></button>
            </div>
            <h2 className="projectTitle">Blooming Riders</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
