import React from "react";
import translate from "../i18n/translate";
import "../styles/education.css"

const Education = () => {
  return (
    <section className="col-12 education">
      <h1 className="col-12 d-none d-lg-block">{translate("heading-education")}</h1>
      <div className="col-12 col-lg-6  offset-lg-3 message">
        <p id="message">{translate("message")}</p>
      </div>
      <div className="col-12 container profPath">
        <div className="row">
        <div className="col-12 col-lg-3 workContainer lightBox firstBox">
          <p>2019</p>
          <p>{translate('description-technofuture')} </p>
          <p>{translate("country")}</p>
        </div>
        <div className="col-12 col-lg-3 workContainer darkBox secondBox">
          <p>{translate("date-becode")}</p>
          <p>{translate("description-becode")}</p>
          <p>{translate("country-city")}</p>
        </div>
        <div className="col-12 col-lg-3 workContainer lightBox thirdBox">
          <p>{translate('date-blooming')} </p>
          <p>
            {translate('description-blooming')}
          </p>
          <p>{translate("country")}</p>
        </div>
        <div className="col-12 col-lg-3 workContainer darkBox next">
          <h2>What's next?..</h2>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
