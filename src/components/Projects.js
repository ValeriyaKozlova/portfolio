import React from "react";
import A6K from "../images/a6k.png";
import Ancubator from "../images/ancubator.png";
import translate from "../i18n/translate";
import Blooming from "../images/blooming.png";
import ProjectCard from "./reusable-components/ProjectCard";
import "../styles/project.css";

const Projects = () => {
  return (
    <section className="col-12 container projects">
      <h1 className="col-12 d-none d-lg-block">{translate('heading-projects')}</h1>
      <div className="row projectContainer">
        <ProjectCard translateDescription={translate("a6k")} title={"A6K"} link={"https://www.a6k.be/home/"} imgSrc={A6K} />
        <ProjectCard translateDescription={translate("ancubator")} title={"ANCUBATOR"} link={"https://www.ancubator.com"} imgSrc={Ancubator}/>
        <ProjectCard translateDescription={translate("admin-blooming")} title={"admin Panel BR"} link={"#"} imgSrc={Blooming}/>
        <ProjectCard translateDescription={translate("blooming")} title={"Blooming Riders"} link={"#"} imgSrc={Blooming}/>
        </div>
    </section>
  );
};

export default Projects;