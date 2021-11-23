import React, { useState } from "react"
import translate from "../i18n/translate"
import ProjectCard from "./reusable-components/ProjectCard"
import ListOfProjects from "./reusable-components/ListOfProjects"
import ListOfLogos from "./reusable-components/ListOfLogos"
import { projects } from "../utils/projectsList"
import ListOfLogosMobile from "./reusable-components/ListOfLogosMobile"
import ListOfProjectsMobile from "./reusable-components/ListOfProjectsMobile"

const Projects = () => {
  const [project, setProject] = useState("Korina")
  const [logoPosition, setLogoPosition] = useState("50px")
  const [logoMobilePosition, setLogoMobilePosition] = useState("0px")
  const [prev, setPrev] = useState("")

  function changeProject(name, logoPos) {
    setPrev(() => {
      return project
    })
    setLogoPosition(() => {
      return logoPos
    })
    setLogoMobilePosition(() => {
      return logoPos
    })
    setTimeout(function () {
      setProject(() => {
        return name
      })
    }, 600)
  }

  return (
    <section
      id="projects"
    >
      <div className="clip"></div>
      <div className="container mainContainer">
        <div className="row projectContainer justify-content-center">
          <h2 className="col-12">
            {translate("heading-projects")}
          </h2>
          {
            projects.map(pr => {
              if (pr.title === project) return <ProjectCard
                key={pr.id}
                translateDescription={translate(pr.title)}
                title={pr.title}
                link={pr.link}
                className={prev === pr.title ? true : false}
              />
            })
          }
          <div className="col-12 buttons-mobile">
            <ListOfProjectsMobile changeProject={changeProject} project={project} />
          </div>
          <div
            className="col-12 col-lg-3 logos"
            style={{
              transform: `skewX(-15deg) translateY(${logoPosition})`,
              color: "white",
            }}
          >
            <ListOfLogos project={project} />
          </div>
          <div
            className="col-12 col-lg-3 logos-mobile"
          >
            <ListOfLogosMobile project={project} logoMobilePosition={logoMobilePosition} />
          </div>
          <div className="col-lg-1 buttons offset-lg-2">
            <ListOfProjects changeProject={changeProject} project={project} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects