import React from "react"

function ListOfProjects({ changeProject, project }) {

  return (
    <div className="preview justify-content-center">
          <button
        className={project === "Tavrida" ? "selected" : "notSelected"}
        onClick={() => changeProject("Tavrida", "50px")}
      ></button>
            <button
        className={project === "Bessmertny polk" ? "selected" : "notSelected"}
        onClick={() => changeProject("Bessmertny polk", "-250px")}
      ></button>
            <button
        className={project === "Korina" ? "selected" : "notSelected"}
        onClick={() => changeProject("Korina", "-500px")}
      ></button>
      <button
        className={project === "Blooming Riders" ? "selected" : "notSelected"}
        onClick={() => changeProject("Blooming Riders", "-750px")}
        aria-label="Blooming Riders"
      ></button>
      <button
        className={project === "JobSwap" ? "selected" : "notSelected"}
        onClick={() => changeProject("JobSwap", "-1000px")}
        aria-label="JobSwap"
      ></button>
      <button
        className={project === "ANCUBATOR" ? "selected" : "notSelected"}
        onClick={() => changeProject("ANCUBATOR", "-1250px")}
        aria-label="ANCUBATOR"
      ></button>
      <button
        className={project === "A6K" ? "selected" : "notSelected"}
        onClick={() => changeProject("A6K", `-1500px`)}
        aria-label="A6K"
      ></button>
    </div>
  )
}

export default ListOfProjects
