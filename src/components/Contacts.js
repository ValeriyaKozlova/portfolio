import React from 'react'
import translate from "../i18n/translate";

export default function Contacts() {
  return (
    <section id="contacts">
      <div className="container">
        <div className="row">
          <h2 className="col-12">{translate("contacts")}</h2>
        </div>
        <div className="cv">
          <a href="/images/myw3schoolsimage.jpg" download>
            {translate("view-cv")}
          </a>
          <a href="/images/myw3schoolsimage.jpg" download>
            {translate("download")}
          </a>
        </div>
        <div className="email">
          <a href="mailto: kozlova.valeriya.v@gmail.com">
            kozlova.valeriya.v@gmail.com
          </a>
        </div>
        <div className="row">
          <div className="social col-12">
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
          </div>

        </div>
      </div>
    </section>
  )
}
