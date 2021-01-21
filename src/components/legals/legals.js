import React from "react";

import "./legals.scss";

const Legals = (props) => {
  const packageLegals = props.packageOneLegals;

  return (
    <section className="legals">
      <h2 className="legals__heading">Important Information</h2>
      <h3 className="legals__heading">The legal stuff</h3>
      <p
        className = "legals__paragraph"
        dangerouslySetInnerHTML = {
          {
            __html: packageLegals
          }
        }>
      </p>
    </section>
  )
};

export default Legals;
