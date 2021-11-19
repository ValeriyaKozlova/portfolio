import React from "react"
import translate from "../../i18n/translate"

function ProjectCard({
  translateDescription,
  title,
  link,
  className,
}) {

  return (
    <div className="col-7 col-lg-6 info" key={title}>
      <h3
        className={className ? "prevHeading" : "nextHeading"}
      >
        {title}
      </h3>
      <div className="projectInfo">
        <p
          className={className ? "prevText" : "nextText"}
        >
          {translateDescription}
        </p>
        <a
          className={className ? "prevVisit" : "nextVisit"}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {translate("button-visitSite")}
        </a>
      </div>
    </div>
  )
}

export default ProjectCard
