import React from "react"
import LogoA6k from "./Logo-a6k"
import LogoAncubator from "./Logo-ancubator"
import LogoJobSwap from "./Logo-jobSwap"
import LogoBlooming from "./LogoBlooming"
import LogoKorina from "./LogoKorina"

function ListOfLogos({ project }) {
  return (
    <>
      <div className={project === "Korina" ? "logo" : "logo logoNotSelected"}>
        <LogoKorina />
      </div>
      <div className={project === "Blooming Riders" ? "logo" : "logo logoNotSelected"}>
        <LogoBlooming />
      </div>
      <div className={project === "JobSwap" ? "logo" : "logo logoNotSelected"}>
        <LogoJobSwap />
      </div>
      <div
        className={project === "ANCUBATOR" ? "logo" : "logo logoNotSelected"}
      >
        <LogoAncubator />
      </div>
      <div className={project === "A6K" ? "logo" : "logo logoNotSelected"}>
        <LogoA6k />
      </div>
    </>
  )
}

export default ListOfLogos
