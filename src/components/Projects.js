import React, { useState } from "react"
import translate from "../i18n/translate"
import ProjectCard from "./reusable-components/ProjectCard"
import ListOfProjects from "./reusable-components/ListOfProjects"
import ListOfLogos from "./reusable-components/ListOfLogos"
import { projects } from "../utils/projectsList"

const Projects = () => {
  const [project, setProject] = useState("Korina")
  const [logoPosition, setLogoPosition] = useState("50px")
  const [prev, setPrev] = useState("")

  function changeProject(name, logoPos) {
    setPrev(() => {
      return project
    })
    setLogoPosition(() => {
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
          <h2 className="col-12 d-none d-lg-block">
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
          {/* <div className="col-1 buttons offset-lg-2 ">
              <ListOfProjects changeProject={changeProject} project={project} />
            </div> */}
          <div
            className="col-3 logos"
            style={{
              transform: `skewX(-15deg) translateY(${logoPosition})`,
              color: "white",
            }}
          >
            <ListOfLogos project={project} />
          </div>
          <div className="col-1 buttons offset-lg-2 ">
            <ListOfProjects changeProject={changeProject} project={project} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects