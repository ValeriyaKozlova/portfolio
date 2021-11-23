import React from 'react'
import { Link } from "react-router-dom";
import translate from "../i18n/translate";
import '../styles/pages/pageNotFound.scss'


export default function PageNotFound() {
  return (
    <section className="pageNotFound">
      <p>404</p>
      <Link to="/">{translate(`not-found-button`)}</Link>
    </section>
  )
}
