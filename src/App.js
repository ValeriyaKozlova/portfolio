import React, { useState } from 'react'
import { Switch, Route } from 'react-router-dom'
import Education from './components/Education'
import Projects from './components/Projects'
import About from './components/About'
import './styles/App.scss'
import Navbar from './components/Navbar'
import { I18nProvider, LOCALES } from './i18n'
import Footer from './components/Footer'
import GreetingArea from './components/GreetingArea'
import Contacts from './components/Contacts'

function App() {
  const [activeLangue, setActiveLangue] = useState(LOCALES.ENGLISH)

  return (
    <I18nProvider locale={activeLangue}>
      <Navbar
        activeLangue={activeLangue}
        setActiveLangue={setActiveLangue}
      />
      <main>
        <GreetingArea />
        <About />
        <Education />
        <Projects />
        <Contacts />
      </main>
      <Footer />
    </I18nProvider>
  )
}

export default App
