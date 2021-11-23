import React, { useState } from 'react'
import { Switch, Route } from 'react-router-dom'
import './styles/App.scss'
import Home from './pages/Home'
import PageNotFound from './pages/PageNotFound'
import CvValeriya from './pages/CvValeriya'
import Navbar from './components/Navbar'
import { I18nProvider, LOCALES } from './i18n'

function App() {
  const [activeLangue, setActiveLangue] = useState(localStorage.getItem('language') ||
    LOCALES.ENGLISH)
  return (
    <I18nProvider locale={activeLangue}>
      <Navbar
        activeLangue={activeLangue}
        setActiveLangue={setActiveLangue}
      />
      <Switch>
        <Route path="/cv-valeriya">
          <CvValeriya />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
    </I18nProvider>
  )
}

export default App
