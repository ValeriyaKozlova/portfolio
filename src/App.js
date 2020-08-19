import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import Education from "./components/Education";
import Projects from "./components/Projects";
import About from "./components/About";
import "./styles/App.css";
import "./styles/animations.css";
import Navbar from "./components/Navbar";
import { I18nProvider, LOCALES } from "./i18n";
import translate from "./i18n/translate";

function App() {
  const [activeLangue, setActiveLangue] = useState(LOCALES.ENGLISH);

  return (
    <I18nProvider locale={activeLangue}>
      <div className="container-fluid">
        <div className="row">
          <Navbar
            activeLangue={activeLangue}
            setActiveLangue={setActiveLangue}
          />
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
        <footer className="d-lg-none">
        <div className="contact">
        <a
          href="https://www.facebook.com/valeriya.kozlova.73"
          target="_blank"
          rel="noopener noreferrer"
        >
          f
        </a>
        <a
          href="https://www.linkedin.com/in/valeriya-kozlova-v/"
          target="_blank"
          rel="noopener noreferrer"
        >
          in
        </a>
        <a
          href="https://github.com/ValeriyaKozlova"
          target="_blank"
          rel="noopener noreferrer"
        >
          git
        </a>
        <a className="cv" href="/images/myw3schoolsimage.jpg" download>
          {translate("download")}
        </a>
        <a className="email" href="mailto: kozlova.valeriya.v@gmail.com">
          kozlova.valeriya.v@gmail.com
        </a>
      </div>
        </footer>
      </div>
    </I18nProvider>
  );
}

export default App;
