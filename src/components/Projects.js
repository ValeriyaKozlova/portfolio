import React, { useState } from "react"
import A6K from "../images/a6k.png"
import Ancubator from "../images/ancubator.png"
import translate from "../i18n/translate"
import Blooming from "../images/blooming.png"
import ProjectCard from "./reusable-components/ProjectCard"
import "../styles/modules/project.scss"
import ListOfProjects from "./reusable-components/ListOfProjects"
import ListOfLogos from "./reusable-components/ListOfLogos"

const Projects = () => {
  const [project, setProject] = useState("blooming")
  const [bgSection, setBgSection] = useState("#3DD804")
  const [logoPosition, setLogoPosition] = useState("150px")
  const [prev, setPrev] = useState("")

  function changeProject(name, bgSection, logoPos) {
    setPrev(() => {
      return project
    })
    setBgSection(() => {
      return bgSection
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
  console.log(prev)
  console.log(project)

  return (
    <section
      className="projects"
      id="projects"
    >
      <div className="container mainContainer">
        <div className="row projectContainer justify-content-center">
          <h2 className="col-12 d-none d-lg-block">
            {translate("heading-projects")}
          </h2>
          {project === "a6k" ? (
            <ProjectCard
              key={1}
              translateDescription={translate("a6k")}
              title={"A6K"}
              link={"https://www.a6k.be/home/"}
              imgSrc={A6K}
              textColor="#041932"
              headingColor="#D92128"
              className={prev === "a6k" ? true : false}
            />
          ) : project === "ancubator" ? (
            <ProjectCard
              key={2}
              translateDescription={translate("ancubator")}
              title={"ANCUBATOR"}
              link={"https://www.ancubator.com"}
              imgSrc={Ancubator}
              headingColor="#1E6FF1"
              textColor="#041932"
              className={prev === "ancubator" ? true : false}
            />
          ) : project === "blooming" ? (
            <ProjectCard
              key={3}
              translateDescription={translate("blooming")}
              title={"Blooming Riders"}
              link={"#"}
              imgSrc={Blooming}
              textColor="#041932"
              headingColor="#C98F3F"
              className={prev === "blooming" ? true : false}
            />
          ) : (
            <ProjectCard
              key={4}
              translateDescription={translate("adminBlooming")}
              title={"JobSwap"}
              link={"#"}
              imgSrc={Blooming}
              textColor="#041932"
              headingColor="#0400D7"
              className={prev === "jobSwap" ? true : false}
            />
          )}
          <div
            className="col-3 logos"
            style={{
              transform: `skewX(-15deg) translateY(${logoPosition})`,
              color: "white",
            }}
          >
            <ListOfLogos project={project} />
          </div>
          <div className="col-1 buttons offset-2 ">
            <ListOfProjects changeProject={changeProject} project={project} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
