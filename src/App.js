import React, { useEffect, useState } from 'react'
import { Switch, Route } from 'react-router-dom'
import './styles/App.scss'
import Home from './pages/Home'
import PageNotFound from './pages/PageNotFound'
import CvValeriya from './pages/CvValeriya'
import Navbar from './components/Navbar'
import { I18nProvider, LOCALES } from './i18n'

function App() {
  const [activeLangue, setActiveLangue] = useState()

  useEffect(() => {
    if (localStorage.getItem('language')) {
      setActiveLangue(localStorage.getItem('language'))
    } else {
      const lang = navigator.language
      switch (lang.toLowerCase()) {
        case 'ru-ru':
          setActiveLangue(LOCALES.RUSSIAN)
          break;
        case 'fr-fr':
          setActiveLangue(LOCALES.FRENCH)
          break;
        default:
          setActiveLangue(LOCALES.ENGLISH)
      }
    }
  }, [])
  return (
    <I18nProvider locale={activeLangue}>
      <Navbar
        activeLangue={activeLangue}
        setActiveLangue={setActiveLangue}
      />
      <Switch>
        <Route path="/cv-valeriya">
          <CvValeriya activeLangue={activeLangue} />
        </Route>
        <Route exact path="/portfolio">
          <Home activeLangue={activeLangue} />
        </Route>
        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
    </I18nProvider>
  )
}

export default App
