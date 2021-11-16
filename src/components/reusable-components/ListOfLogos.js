import React from "react"
import LogoA6k from "./Logo-a6k"
import LogoAncubator from "./Logo-ancubator"
import LogoJobSwap from "./Logo-jobSwap"
import LogoBlooming from "./LogoBlooming"

function ListOfLogos({ project }) {
  return (
    <>
      <div className={project === "blooming" ? "logo" : "logo logoNotSelected"}>
        <LogoBlooming />
      </div>
      <div className={project === "jobswap" ? "logo" : "logo logoNotSelected"}>
        <LogoJobSwap />
      </div>
      <div
        className={project === "ancubator" ? "logo" : "logo logoNotSelected"}
      >
        <LogoAncubator />
      </div>
      <div className={project === "a6k" ? "logo" : "logo logoNotSelected"}>
        <LogoA6k />
      </div>
    </>
  )
}

export default ListOfLogos
