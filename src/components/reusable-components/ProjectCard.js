import React from "react";
import A6K from "../../images/a6k.png";
import translate from "../../i18n/translate";

function ProjectCard({translateDescription, title, link, imgSrc }) {
  return (
    <div className="col-12 container">
      <div className="row">
        <div className="col-12 col-md-5 img-container" 
        // style={{backgroundImage: `url(${imgSrc})`}}
        >
          <img src={imgSrc} alt={`screenshot of ${title} site`} />
          <h2 className="projectTitle">{title}</h2>
        </div>
        <div className="col-12 col-md-5 projectInfo">
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
