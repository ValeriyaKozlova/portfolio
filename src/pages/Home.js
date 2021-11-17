import React from 'react'
import Education from '../components/Education'
import Projects from '../components/Projects'
import About from '../components/About'
import '../styles/App.scss'
import Footer from '../components/Footer'
import GreetingArea from '../components/GreetingArea'
import Contacts from '../components/Contacts'

function Home() {
  return (
    <>
      <main>
        <GreetingArea />
        <About />
        <Education />
        <Projects />
        <Contacts />
      </main>
      <Footer />
    </>
  )
}

export default Home
