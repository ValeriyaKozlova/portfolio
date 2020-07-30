import React from "react";
import translate from "../i18n/translate";

const Education = () => {
  return (
    <section className="col-12 education">
      <h1>{translate("heading-education")}</h1>
      <div className="message">
        <p id="message">{translate("message")}</p>
      </div>
      <div className="profPath">
        <div className="workContainer lightBox firstBox">
          <p>2019</p>
          <p>{translate('description-technofuture')} </p>
          <p>{translate("country")}</p>
        </div>
        <div className="workContainer darkBox secondBox">
          <p>{translate("date-becode")}</p>
          <p>{translate("description-becode")}</p>
          <p>{translate("country-city")}</p>
        </div>
        <div className="workContainer lightBox thirdBox">
          <p>{translate('date-blooming')} </p>
          <p>
            {translate('description-blooming')}
          </p>
          <p>{translate("country")}</p>
        </div>
        <div className="workContainer darkBox next">
          <h2>What's next?..</h2>
        </div>
      </div>
    </section>
  );
};

export default Education;
