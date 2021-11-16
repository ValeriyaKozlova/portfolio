import React from "react"
import translate from "../../i18n/translate"

function ProjectCard({
  translateDescription,
  title,
  link,
  textColor,
  headingColor,
  className,
}) {
  return (
    <div className="col-6 info" key={title}>
      <h3
        style={{ color: headingColor }}
        className={className ? "prevHeading" : "nextHeading"}
      >
        {title}
      </h3>
      <div className="projectInfo">
        <p
          className={className ? "prevText" : "nextText"}
          style={{ color: textColor }}
        >
          {translateDescription}
        </p>
        <a
          className={className ? "prevVisit" : "nextVisit"}
          style={{ color: textColor }}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {translate("button-visitSite")} --{">"}
        </a>
      </div>
    </div>
  )
}

export default ProjectCard
