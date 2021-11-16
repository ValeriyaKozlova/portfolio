import React from "react"

function ListOfProjects({ changeProject, project }) {
  return (
    <div className="preview justify-content-center">
      <button
        className={project === "blooming" ? "selected" : "notSelected"}
        onClick={() => changeProject("blooming", "#FFF7ED", "150px")}
      ></button>
      <button
        className={project === "jobswap" ? "selected" : "notSelected"}
        onClick={() => changeProject("jobswap", "#BFD4DB", "-150px")}
      ></button>
      <button
        className={project === "ancubator" ? "selected" : "notSelected"}
        onClick={() => changeProject("ancubator", "#bbeaff", "-400px")}
      ></button>
      <button
        className={project === "a6k" ? "selected" : "notSelected"}
        onClick={() => changeProject("a6k", "#F6E2E3", "-650px")}
      ></button>
    </div>
  )
}

export default ListOfProjects
