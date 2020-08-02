import React from "react";
import A6K from "../images/a6k.png";
import Ancubator from "../images/ancubator.png";
import translate from "../i18n/translate";
import Blooming from "../images/blooming.png";
const Projects = () => {
  return (
    <section className="col-12 container projects">
      <h1 className="col-12 d-none d-lg-block">{translate('heading-projects')}</h1>
      <div className="row">
        {/* <div className="flex"> */}
          <div className="col-12 col-md-4 img-container">
            <img src={A6K} alt="screenshot of a6k site" />
            <div className="projectInfo">
              <p>{translate("a6k")}</p>
              <button>
                <a
                  href="https://www.a6k.be/home/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {translate("button-visitSite")}
                </a>
              </button>
            </div>
            <h2 className="projectTitle">A6K</h2>
          </div>
          <div className="col-12 col-md-4 img-container">
            <img src={Ancubator} alt="screenshot of ancubator site" />
            <div className="projectInfo">
              <p>{translate("ancubator")}</p>
              <button>
                <a
                  href="https://www.ancubator.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {translate("button-visitSite")}
                </a>
              </button>
            </div>
            <h2 className="projectTitle">ANCUBATOR</h2>
          </div>
        {/* </div> */}
      </div>
      <div className="row">
        {/* <div className="flex"> */}
          <div className="col-12 col-md-4 img-container blooming">
            <img src={Blooming} alt="screenshot of a6k site" />
            <div className="projectInfo">
              <p>{translate("admin-blooming")}</p>
            </div>
            <h2 className="projectTitle">admin Panel BR</h2>
          </div>
          <div className="col-12 col-md-4 img-container blooming">
            <img src={Blooming} alt="screenshot of ancubator site" />
            <div className="projectInfo">
              <p>{translate("blooming")}</p>
              {/* <button><a href="#" target="_blank" rel="noopener noreferrer">{translate('button-visitSite')}</a></button> */}
            </div>
            <h2 className="projectTitle">Blooming Riders</h2>
          </div>
        </div>
      {/* </div> */}
    </section>
  );
};

export default Projects;

{/* <div className="col-12">
        <div className="flex">
          <div className="img-container">
            <img src={A6K} alt="screenshot of a6k site" />
            <div className="projectInfo">
              <p>{translate("a6k")}</p>
              <button>
                <a
                  href="https://www.a6k.be/home/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {translate("button-visitSite")}
                </a>
              </button>
            </div>
            <h2 className="projectTitle">A6K</h2>
          </div>
          <div className="img-container">
            <img src={Ancubator} alt="screenshot of ancubator site" />
            <div className="projectInfo">
              <p>{translate("ancubator")}</p>
              <button>
                <a
                  href="https://www.ancubator.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {translate("button-visitSite")}
                </a>
              </button>
            </div>
            <h2 className="projectTitle">ANCUBATOR</h2>
          </div>
        </div>
      </div>
      <div className="col-12">
        <div className="flex">
          <div className="img-container blooming">
            <img src={Blooming} alt="screenshot of a6k site" />
            <div className="projectInfo">
              <p>{translate("admin-blooming")}</p>
            </div>
            <h2 className="projectTitle">admin Panel BR</h2>
          </div>
          <div className="img-container blooming">
            <img src={Blooming} alt="screenshot of ancubator site" />
            <div className="projectInfo">
              <p>{translate("blooming")}</p>
              <button><a href="#" target="_blank" rel="noopener noreferrer">{translate('button-visitSite')}</a></button>
            </div>
            <h2 className="projectTitle">Blooming Riders</h2>
          </div>
        </div>
      </div> */}