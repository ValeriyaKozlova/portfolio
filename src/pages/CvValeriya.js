import React from 'react'
import '../styles/pages/cv.scss'
import translate from "../i18n/translate";

export default function CvValeriya() {
  return (
    <main>
      <div className="container" id="cv">
        <div className="row">
          <h1>{translate(`cv-name`)}</h1>
        </div>
      </div>
    </main>
  )
}
