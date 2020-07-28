import React from "react";
import {Switch, Route} from 'react-router-dom'
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import About from "./components/About";
import "./styles/App.css";
import "./styles/animations.css"
import Navbar from "./components/Navbar";
import Contacts from './components/Contacts'

function App() {
  return (
    <div className="container-fluid">
      <div className="col-1">
        <Navbar /> 
      </div>
    <main className="col-10 main-container">
    <Switch>
      <Route exact path="/about" component={About} />
      <Route exact path="/education-experience" component={Education} />
      <Route exact path="/skills" component={Skills} />
      <Route exact path="/projects" component={Projects} />
    </Switch>
    </main>
    </div>
  );
}

export default App;
