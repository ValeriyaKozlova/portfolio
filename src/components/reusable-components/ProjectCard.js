import React from "react";
import translate from "../../i18n/translate";
import LogoBlooming from "./LogoBlooming";

function ProjectCard({translateDescription, title, link, imgSrc }) {
  console.log(title)
  console.log(title === "Blooming Riders" || "admin Panel BR")
  return (
    <div className="col-11 col-lg-9 offset-lg-2 container">
      <div className="row">
        <div className="col-12 container titleContainer">
          <div className="row">
          <h2 className="col-12 offset-lg-5 col-md-7">{title}</h2>
          </div>
        </div>
        <div className="col-12 col-md-6 img-container">
          {
            title === "Blooming Riders" ?
            <LogoBlooming /> : 
            title ===  "admin Panel BR" ?
            <LogoBlooming /> :
          <img src={imgSrc} alt={`screenshot of ${title} site`} />
          }
        </div>
        <div className="col-12 offset-lg-5 col-md-7 projectInfo">
          <p>{translateDescription}</p>
   {        title !==  "admin Panel BR" &&
             <button>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {translate("button-visitSite")}
            </a>
          </button>}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
