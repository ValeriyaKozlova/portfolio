import React from 'react'
import A6K from '../images/a6k.png'
import Ancubator from '../images/ancubator.png'

const Projects = () => {
    return (
        <section className="col-12 container section projects">
            <h1 className="col-12">Projects</h1>
            <div className="col-6">
                <img src={A6K} alt="screenshot of a6k site" />
            </div>
            <div className="col-6">
            <img src={Ancubator} alt="screenshot of ancubator site" />
            </div>
            <div className="col-6">
                <img src={A6K} alt="screenshot of a6k site" />
            </div>
            <div className="col-6">
            <img src={Ancubator} alt="screenshot of ancubator site" />
            </div>
            {/* <div className="col-4"><a href="https://www.a6k.be/home/" target="_blank" rel="noopener noreferrer">a6k</a></div> */}
            <div className="col-4"></div>
            {/* <div className="col-4"><a href="https://www.ancubator.com" target="_blank" rel="noopener noreferrer">ANCUBATOR</a></div> */}
        </section>
    )
}

export default Projects
