import React from "react";

function Contacts() {
  return (
    <section className="col-12 section contact" id="contacts">
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
      <a className="email" href="mailto: kozlova.valeriya.v@gmail.com">
        Email: kozlova.valeriya.v@gmail.com
      </a>
    </section>
  );
}

export default Contacts;
