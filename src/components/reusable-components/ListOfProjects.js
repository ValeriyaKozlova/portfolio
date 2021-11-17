import React from "react"

function ListOfProjects({ changeProject, project }) {
  return (
    <div className="preview justify-content-center">
      <button
        className={project === "Korina" ? "selected" : "notSelected"}
        onClick={() => changeProject("Korina", "50px")}
      ></button>
      <button
        className={project === "Blooming Riders" ? "selected" : "notSelected"}
        onClick={() => changeProject("Blooming Riders", "-250px")}
      ></button>
      <button
        className={project === "JobSwap" ? "selected" : "notSelected"}
        onClick={() => changeProject("JobSwap", "-500px")}
      ></button>
      <button
        className={project === "ANCUBATOR" ? "selected" : "notSelected"}
        onClick={() => changeProject("ANCUBATOR", "-750px")}
      ></button>
      <button
        className={project === "A6K" ? "selected" : "notSelected"}
        onClick={() => changeProject("A6K", "-950px")}
      ></button>
    </div>
  )
}

export default ListOfProjects
