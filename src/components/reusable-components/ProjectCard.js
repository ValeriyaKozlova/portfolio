import React from "react";
import translate from "../../i18n/translate";

function ProjectCard({translateDescription, title, link, imgSrc }) {
  return (
    <div className="col-9 offset-lg-2 container">
      <div className="row">
        <div className="col-12 container titleContainer">
          <div className="row">
          <h2 className="col-12 offset-lg-5 col-md-7">{title}</h2>
          </div>
        </div>
        <div className="col-12 col-md-6 img-container">
          <img src={imgSrc} alt={`screenshot of ${title} site`} />
          {/* <h2 className="projectTitle">{title}</h2> */}
        </div>
        <div className="col-12 offset-lg-5 col-md-7 projectInfo">
          {/* <h2>{title}</h2> */}
          <p>{translateDescription}</p>
          <button>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {translate("button-visitSite")}
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
