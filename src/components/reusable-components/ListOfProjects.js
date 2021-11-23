import React from "react"

function ListOfProjects({ changeProject, project }) {

  return (
    <div className="preview justify-content-center">
      <button
        className={project === "Korina" ? "selected" : "notSelected"}
        onClick={() => changeProject("Korina", "50px")}
        aria-label="Korina"
      ></button>
      <button
        className={project === "Blooming Riders" ? "selected" : "notSelected"}
        onClick={() => changeProject("Blooming Riders", "-250px")}
        aria-label="Blooming Riders"
      ></button>
      <button
        className={project === "JobSwap" ? "selected" : "notSelected"}
        onClick={() => changeProject("JobSwap", "-500px")}
        aria-label="JobSwap"
      ></button>
      <button
        className={project === "ANCUBATOR" ? "selected" : "notSelected"}
        onClick={() => changeProject("ANCUBATOR", "-750px")}
        aria-label="ANCUBATOR"
      ></button>
      <button
        className={project === "A6K" ? "selected" : "notSelected"}
        onClick={() => changeProject("A6K", `-950px`)}
        aria-label="A6K"
      ></button>
    </div>
  )
}

export default ListOfProjects
