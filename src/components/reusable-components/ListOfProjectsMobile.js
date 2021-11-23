import React from "react"

function ListOfProjectsMobile({ changeProject, project }) {

  return (
    <div className="preview justify-content-center">
      <button
        className={project === "Korina" ? "selected" : "notSelected"}
        onClick={() => changeProject("Korina", "0px")}
      ></button>
      <button
        className={project === "Blooming Riders" ? "selected" : "notSelected"}
        onClick={() => changeProject("Blooming Riders", `-${window.innerWidth / 2}px`)}
      ></button>
      <button
        className={project === "JobSwap" ? "selected" : "notSelected"}
        onClick={() => changeProject("JobSwap", `-${(window.innerWidth * 2) / 2}px`)}
      ></button>
      <button
        className={project === "ANCUBATOR" ? "selected" : "notSelected"}
        onClick={() => changeProject("ANCUBATOR", `-${(window.innerWidth * 3) / 2}px`)}
      ></button>
      <button
        className={project === "A6K" ? "selected" : "notSelected"}
        onClick={() => changeProject("A6K", `-${(window.innerWidth * 4) / 2}px`)}
      ></button>
    </div>
  )
}

export default ListOfProjectsMobile
