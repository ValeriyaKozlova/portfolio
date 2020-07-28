import React from "react";
import {Switch, Route} from 'react-router-dom'
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import About from "./components/About";
import "./styles/App.css";
import Navbar from "./components/Navbar";
import Contacts from './components/Contacts'

function App() {
  return (
    <>
    <Navbar /> 
    <main className="container main-container">
      <About />
      <Education />
      <Skills />
      <Projects />
      <Contacts />
    </main>
    <Switch>
      <Route exact path="about" component={About} />
    </Switch>
    </>
  );
}

export default App;
