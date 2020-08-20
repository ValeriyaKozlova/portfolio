import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import Education from "./components/Education";
import Projects from "./components/Projects";
import About from "./components/About";
import "./styles/App.css";
import "./styles/animations.css";
import Navbar from "./components/Navbar";
import { I18nProvider, LOCALES } from "./i18n";
import Footer from "./components/Footer";

function App() {
  const [activeLangue, setActiveLangue] = useState(LOCALES.ENGLISH);

  return (
    <I18nProvider locale={activeLangue}>
      <div className="container-fluid">
        <div className="row">
        <div className="d-none d-lg-block col-lg-2 navbar-nav">
          <Navbar
            activeLangue={activeLangue}
            setActiveLangue={setActiveLangue}
          />
        </div>
        <main className="col-lg-10 col-12 container">
          <Switch>
            <Route
            exact
              path="/"
              component={() => <About />}
            />
            <Route
            exact
              path="/education-experience"
              component={() => <Education />}
            />
            <Route
            exact
              path="/projects"
              component={() => <Projects />}
            />
          </Switch>
        </main>
        </div>
        <Footer  
            activeLangue={activeLangue}
            setActiveLangue={setActiveLangue}/>
      </div>
    </I18nProvider>
  );
}

export default App;
