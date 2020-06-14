import React from 'react';
import bootstrap from '../images/bootstraplogo.png'
import css from '../images/csslogo.png'
import gitlogo from '../images/gitlogo.png'
import html from '../images/htmllogo.png'
import js from '../images/jslogo.png'
import materialize from '../images/materializelogo.png'

function Skills() {
    return (
      <div className="Skills container col-10">
        <h1 className="col-12">Skills</h1>
        <div className="col-4"><img src={bootstrap} alt="bootstrap logo"/></div>
        <div className="col-4"><img src={css} alt="css logo"/></div>
        <div className="col-4"><img src={gitlogo} alt="git logo"/></div>
        <div className="col-4"><img src={html} alt="html logo"/></div>
        <div className="col-4"><img src={js} alt="js logo"/></div>
        <div className="col-4"><img src={materialize} alt="materialize logo"/></div>
        <div className="col-4"><img src="" alt=""/></div>
        <div className="col-4"><img src="" alt=""/></div>
        <div className="col-4"><img src="" alt=""/></div>
        <div className="col-4"><img src="" alt=""/></div>
        <div className="col-4"><img src="" alt=""/></div>
        <div className="col-4"><img src="" alt=""/></div>
      </div>
    );
  }
  
  export default Skills;