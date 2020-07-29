import React from "react";
import A6K from "../images/a6k.png";
import Ancubator from "../images/ancubator.png";

const a6kInfo = {
    en: "It was a group project during my studies in BeCode. The site has already been working for some time, but there were a lot of small issues that we solved. In general,I worked with JavaScript (created animations, rewrote some functions, analyzed the code to delete unused functions), but as the site was created with WordPress, I did code in PHP and used some functionality of WordPress, MySQL, Adminer.",
    fr: "C'était un projet de groupe pendant mes études en BeCode. Lesite fonctionne déjà depuis un certain temps, mais il y a eu beaucoup de petits problèmes que nous avons résolus. Engénéral, j'ai travaillé avec JavaScript (créer des animations, réécrire certaines fonctions, analyser le code pour supprimer les fonctions inutilisées), mais comme le site a été créé avec WordPress, j'ai fait du code en PHP et utilisé certaines fonctionnalités de WordPress, MySQL, Adminer.",
    ru: "Это был групповой проект во время моего обучения в BeCode. Сайт уже работал в течение некоторого времени, но мы решили множество мелких проблем. В общем, я работала с JavaScript (создавала анимацию, переписывала некоторые функции, анализировала код для удаления неиспользуемых функций), но, поскольку сайт создавался с помощью WordPress, я делала код на PHP и использовала некоторые функции WordPress, MySQL, Adminer."
}
const Projects = ({ activeLangue }) => {
  return (
    <section className="col-12 container projects">
      <h1 className="col-12">Projects</h1>
      <div className="col-12">
        <div className="flex">
          <div className="img-container">
            <img src={A6K} alt="screenshot of a6k site" />
            <div className="projectInfo">
            <p>
              {activeLangue === "en" ? a6kInfo.en : activeLangue === "fr" ? a6kInfo.fr : a6kInfo.ru}
                  </p>
              <button><a href="https://www.a6k.be/home/" target="_blank" rel="noopener noreferrer">Visit the site</a></button>
            </div>
            <h2 className="projectTitle">A6K</h2>
          </div>
          <div className="img-container">
            <img src={Ancubator} alt="screenshot of ancubator site" />
            <div className="projectInfo">
              {activeLangue === "en" ? (
                <p>
                  It was a group project during my studies in BeCode. The site
                  has already been working for some time, but there were a lot
                  of small issues that we solved. In general, I worked with
                  JavaScript (created animations, rewrote some functions,
                  analyzed the code to delete unused functions), but as the site
                  was created with WordPress, I did code in PHP and used some
                  functionality of WordPress, MySQL, Adminer.
                </p>
              ) : activeLangue === "fr" ? (
                <p>
                  C'était un projet de groupe pendant mes études en BeCode. Le
                  site fonctionne déjà depuis un certain temps, mais il y a eu
                  beaucoup de petits problèmes que nous avons résolus. En
                  général, j'ai travaillé avec JavaScript (créer des animations,
                  réécrire certaines fonctions, analyser le code pour supprimer
                  les fonctions inutilisées), mais comme le site a été créé avec
                  WordPress, j'ai fait du code en PHP et utilisé certaines
                  fonctionnalités de WordPress, MySQL, Adminer.
                </p>
              ) : (
                <p>
                  Это был групповой проект во время моего обучения в BeCode.
                  Сайт уже работал в течение некоторого времени, но мы решили
                  множество мелких проблем. В общем, я работала с JavaScript
                  (создавала анимацию, переписывала некоторые функции,
                  анализировала код для удаления неиспользуемых функций), но,
                  поскольку сайт создавался с помощью WordPress, я делала код на
                  PHP и использовала некоторые функции WordPress, MySQL,
                  Adminer.
                </p>
              )}
              <button><a href="https://www.ancubator.com" target="_blank" rel="noopener noreferrer">Visit the site</a></button>
            </div>
            <h2 className="projectTitle">ANCUBATOR</h2>
          </div>
        </div>
      </div>
      <div className="col-12">
        <div className="flex">
          <div className="img-container">
            <img src={A6K} alt="screenshot of a6k site" />
            <div className="projectInfo">
              {activeLangue === "en" ? (
                <p>
                  It was a group project during my studies in BeCode. The site
                  has already been working for some time, but there were a lot
                  of small issues that we solved. In general, I worked with
                  JavaScript (created animations, rewrote some functions,
                  analyzed the code to delete unused functions), but as the site
                  was created with WordPress, I did code in PHP and used some
                  functionality of WordPress, MySQL, Adminer.
                </p>
              ) : activeLangue === "fr" ? (
                <p>
                  C'était un projet de groupe pendant mes études en BeCode. Le
                  site fonctionne déjà depuis un certain temps, mais il y a eu
                  beaucoup de petits problèmes que nous avons résolus. En
                  général, j'ai travaillé avec JavaScript (créer des animations,
                  réécrire certaines fonctions, analyser le code pour supprimer
                  les fonctions inutilisées), mais comme le site a été créé avec
                  WordPress, j'ai fait du code en PHP et utilisé certaines
                  fonctionnalités de WordPress, MySQL, Adminer.
                </p>
              ) : (
                <p>
                  Это был групповой проект во время моего обучения в BeCode.
                  Сайт уже работал в течение некоторого времени, но мы решили
                  множество мелких проблем. В общем, я работала с JavaScript
                  (создавала анимацию, переписывала некоторые функции,
                  анализировала код для удаления неиспользуемых функций), но,
                  поскольку сайт создавался с помощью WordPress, я делала код на
                  PHP и использовала некоторые функции WordPress, MySQL,
                  Adminer.
                </p>
              )}
            </div>
            <h2 className="projectTitle">admin Panel BR</h2>
          </div>
          <div className="img-container">
            <img src={Ancubator} alt="screenshot of ancubator site" />
            <div className="projectInfo">
              {activeLangue === "en" ? (
                <p>
                  It was a group project during my studies in BeCode. The site
                  has already been working for some time, but there were a lot
                  of small issues that we solved. In general, I worked with
                  JavaScript (created animations, rewrote some functions,
                  analyzed the code to delete unused functions), but as the site
                  was created with WordPress, I did code in PHP and used some
                  functionality of WordPress, MySQL, Adminer.
                </p>
              ) : activeLangue === "fr" ? (
                <p>
                  C'était un projet de groupe pendant mes études en BeCode. Le
                  site fonctionne déjà depuis un certain temps, mais il y a eu
                  beaucoup de petits problèmes que nous avons résolus. En
                  général, j'ai travaillé avec JavaScript (créer des animations,
                  réécrire certaines fonctions, analyser le code pour supprimer
                  les fonctions inutilisées), mais comme le site a été créé avec
                  WordPress, j'ai fait du code en PHP et utilisé certaines
                  fonctionnalités de WordPress, MySQL, Adminer.
                </p>
              ) : (
                <p>
                  Это был групповой проект во время моего обучения в BeCode.
                  Сайт уже работал в течение некоторого времени, но мы решили
                  множество мелких проблем. В общем, я работала с JavaScript
                  (создавала анимацию, переписывала некоторые функции,
                  анализировала код для удаления неиспользуемых функций), но,
                  поскольку сайт создавался с помощью WordPress, я делала код на
                  PHP и использовала некоторые функции WordPress, MySQL,
                  Adminer.
                </p>
              )}
              <button><a href="https://www.ancubator.com" target="_blank" rel="noopener noreferrer">Visit the site</a></button>
            </div>
            <h2 className="projectTitle">Blooming Riders</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
