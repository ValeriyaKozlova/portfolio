import React, { useLayoutEffect } from "react";
import translate from "../i18n/translate";

const Education = () => {

  useLayoutEffect(() => {
    const elementsWeInteract = document.querySelectorAll(".interact")
    const onScroll = () => {
      const winHeight = window.outerHeight
      const interactionSize = winHeight / 1.8
        ;[...elementsWeInteract].map(el => {
          const elPosY = el.getBoundingClientRect().y - winHeight * 0.7 // get the position to the element from scroll
          // Interaction zone
          if (elPosY < 0 && elPosY > interactionSize - interactionSize * 2) {
            const newPosY = -elPosY
            const rate = (1 - (newPosY / interactionSize).toFixed(2)) * 100
            const opacity = (1 - rate / 100) * 1.2
            leftOrRight(el, rate)
            el.style.opacity = opacity
          } else if (elPosY < interactionSize - interactionSize * 2) {
            leftOrRight(el, "100%")
            el.style.opacity = 1
          }
        })
    }
    window.addEventListener("scroll", onScroll)
    function leftOrRight(el, rate) {
      if (el) {
        el.style.transform = `translateY(${rate}px)`
      }
    }
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <section id="education">
      <div className="container">
        <div className="row">
          <h2 className="col-12 d-none d-lg-block">
            {translate("heading-education")}
          </h2>
        </div>
        <div className="row educationContainer">
          <div className="container profPath ">
            <div className="row">
              <div className="col-12 offset-md-6 col-md-6 workContainer interact">
                <h3>Technofuture TIC</h3>
                <p>2019, {translate("country")}</p>
                <p>{translate("description-technofuture")} </p>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-6 workContainer interact even">
                <h3>BeCode</h3>
                <p>
                  {translate("date-becode")}, {translate("country-city")}
                </p>
                <p>{translate("description-becode")}</p>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-6 offset-md-6 workContainer interact">
                <h3>Blooming riders</h3>
                <p>
                  {translate("date-blooming")}, {translate("country")}
                </p>
                <p>{translate("description-blooming")}</p>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-6 workContainer interact even">
                <h3>Korina.be</h3>
                <p>
                  {translate("date-korina")}, {translate("country-city")}
                </p>
                <p>{translate("description-korina")}</p>
              </div>
            </div>
            <div className="row">
              <div className="col-12 workContainer next interact">
                <h3>What's next?..</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
