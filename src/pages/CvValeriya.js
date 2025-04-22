import React, { useEffect } from 'react'
import '../styles/pages/cv.scss'
import translate from "../i18n/translate";

export default function CvValeriya({ activeLangue }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <main>
      <div className="cv-container">
        <div className="bg-clip"></div>
        <div className="container" id="cv">
          <div className="bg"></div>
          <div className="row cv-header-container">
            <div className="col-12 col-md-8 cv-header">
              <h1>{translate(`cv-name`)}</h1>
              <h2>{translate(`cv-post`)}</h2>
              <div className="social">
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
              </div>
              <div className="cv-contact">
                <p>
                  <a href="mailto: kozlova.valeriya.v@gmail.com">
                    kozlova.valeriya.v@gmail.com
                  </a>
                </p>
                <p>{translate(`cv-location`)}</p>
              </div>
              {/* <div className="cv-contact">
                <p>{translate(`cv-location`)}</p>
              </div> */}
            </div>
            <div className="col-12 col-md-4">
              <div id="photo"></div>
            </div> 
          </div>
          <div className="row info">
            <h3 className="col-12">{translate(`cv-skills`)}</h3>
          </div>
          <div className="row info-container">
            <div className="col-12 col-md-5 skills">
              <ul>
                <li>React.js</li>
                <li>React Router</li>
                <li>Redux</li>
                <li>Svelte</li>
                <li>Next.js</li>
              </ul>
              <ul>
                <li>Node.js</li>
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>REST</li>
                <li>GraphQL</li>
              </ul>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>SASS</li>
                <li>Bootstrap</li>
                <li>Materialize</li>
              </ul>
              <ul>
                <li>Git</li>
                <li>Figma</li>
                <li>ClickUp</li>
              </ul>
            </div>

            <div className="col-12 col-md-3">
            {/* <p>{translate(`eng`)}</p>
              <p>{translate(`fr`)}</p>
              <p>{translate(`ru`)}</p> */}
              {translate(`cv-perso-skills`)}

            </div>
            <div className="col-12 col-md-4">
              <p>{translate(`eng`)}</p>
              <p>{translate(`fr`)}</p>
              <p>{translate(`ru`)}</p>
            </div>
          </div>
          <div className="row cv-education">
            <h3 className="col-12">{translate(`cv-education`)}</h3>
            <div className="col-4">
              <p>{translate(`becode-date`)}</p>
              <p>{translate(`becode-ville`)}</p>
            </div>
            <div className="col-8">
              <p>{translate(`becode-place`)}</p>
              <p>{translate(`becode-content`)}</p>
            </div>
            <div className="col-4">
              <p>{translate(`techno-date`)}</p>
              <p>{translate(`techno-ville`)}</p>
            </div>
            <div className="col-8">
              <p>{translate(`techno-place`)}</p>
              <p>{translate(`techno-content`)}</p>
            </div>
            <div className="col-4">
              <p>{translate(`english-date`)}</p>
              <p>{translate(`english-ville`)}</p>
            </div>
            <div className="col-8 print-break">
              <p>{translate(`english-place`)}</p>
              <p>{translate(`english-content`)}</p>
            </div>
            <div className="col-4 ">
              <p>{translate(`tourism-date`)}</p>
              <p>{translate(`tourism-ville`)}</p>
            </div>
            <div className="col-8">
              <p>{translate(`tourism-place`)}</p>
              <p style={{whiteSpace: "pre-line"}}>{translate(`tourism-content`)}</p>
            </div>
          </div>
          <div className="row cv-experience">
            <h3 className="col-12">{translate(`experience`)}</h3>
            <div className="col-4">
              <p>{translate(`date-aventica`)}</p>
              <p>{translate(`country-aventica`)}</p>
            </div>
            <div className="col-8">
              <h4>Aventica</h4>
              <p>{translate(`cv-post`)}</p>
              <p style={{whiteSpace: "pre-line"}}>{translate(`description-aventica`)}</p>
  
            </div>
          </div>
          <div className="row cv-experience"> 
          <div className="col-4">
              <p>{translate(`date-korina`)}</p>
              <p>{translate(`belgium`)}</p>
            </div>
            <div className="col-8 print-break">
              <h4>Korina.be</h4>
              <p>{translate(`cv-post`)}</p>
              <p style={{whiteSpace: "pre-line"}}>{translate(`Korina`)}</p>
              <a
                href='https://www.korina.be'
                target="_blank"
                rel="noopener noreferrer"
              >
                {translate("button-visitSite")}
              </a>
            </div>
            <div className="col-4">
              <p>{translate(`date-blooming`)}</p>
              <p>{translate(`belgium`)}</p>
            </div>
            <div className="col-8">
              <h4>Blooming Riders</h4>
              <p>{translate(`cv-post`)}</p>
              <p style={{whiteSpace: "pre-line"}}>{translate(`cv-Blooming-Riders`)}</p>
              <a
                href='https://www.bloomingriders.com'
                target="_blank"
                rel="noopener noreferrer"
              >
                {translate("button-visitSite")}
              </a>
            </div>
            <div className="col-4">
              <p>{translate(`date-JobSwap`)}</p>
              <p>{translate(`belgium`)}</p>
            </div>
            <div className="col-8">
              <h4>JobSwap</h4>
              <p>{translate(`cv-post`)}</p>
              <p style={{whiteSpace: "pre-line"}}>{translate(`cv-JobSwap`)}</p>
            </div>
            <div className="col-4">
              <p>{translate(`date-ANCUBATOR`)}</p>
              <p>{translate(`belgium`)}</p>
            </div>
            <div className="col-8 print-break">
              <h4>ANCUBATOR</h4>
              <p>{translate(`cv-post`)}</p>
              <p style={{whiteSpace: "pre-line"}}>{translate(`cv-ANCUBATOR`)}</p>
            </div>
            <div className="col-4">
              <p>{translate(`date-becode`)}</p>
              <p>{translate(`belgium`)}</p>
            </div>
            <div className="col-8">
              <h4>A6K</h4>
              <p>{translate(`cv-post`)}</p>
              <p style={{whiteSpace: "pre-line"}}>{translate(`A6K`)}</p>
              <a
                href="https://www.a6k.be"
                target="_blank"
                rel="noopener noreferrer"
              >
                {translate("button-visitSite")}
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="cv-download">
        <a href={`Valeriya_Kozlova_Frontend_Developer_CV_${activeLangue}.pdf`} download>
          {translate("download")}
        </a>
      </div>
    </main >
  )
}
