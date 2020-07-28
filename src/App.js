import React, { useState } from "react";
import {Switch, Route} from 'react-router-dom'
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import About from "./components/About";
import "./styles/App.css";
import "./styles/animations.css"
import Navbar from "./components/Navbar";
// import Contacts from './components/Contacts'

function App() {
  const [activeLangue, setActiveLangue] = useState('en')

  return (
    <div className="container-fluid">
      <div className="col-1">
        <Navbar activeLangue={activeLangue} setActiveLangue={setActiveLangue} /> 
      </div>
    <main className="col-10">
    <Switch>
      <Route exact path="/about" component={() => <About activeLangue={activeLangue}/>} />
      <Route exact path="/education-experience" component={() => <Education activeLangue={activeLangue}/>} />
      <Route exact path="/skills" component={() => <Skills activeLangue={activeLangue}/>} />
      <Route exact path="/projects" component={() => <Projects activeLangue={activeLangue}/>} />
    </Switch>
    </main>
    </div>
  );
}

export default App;
