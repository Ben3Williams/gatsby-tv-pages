import React from 'react'

import mobileImg from '../../images/banners/sport-mobile.jpg';
import tabletImg from '../../images/banners/sport-tablet.jpg';
import desktopImg from '../../images/banners/sport-desktop.jpg';

import './sport.scss';

const Sport = (props) => {
  if (props.displaySportModule !== 'true') {
    return null;
  }

  return (
    <section className="sport">
      <picture className="sport__image-container">
        <source
          className="sport__image"
          media="(min-width: 1200px)"
          srcSet={desktopImg}
        />
        <source
          className="sport__image"
          media="(min-width: 600px)"
          srcSet={tabletImg}
        />
        <source
          className="sport__image"
          media="(min-width: 320px)"
          srcSet={mobileImg}
        />
        <img
          className="sport__image"
          src={desktopImg}
          alt="Lionel Messi taking free kick"
          loading="lazy"
        />
      </picture>
      <div className="sport__content">
        <h2>BT Sport included in this package</h2>
        <p>Keep enjoying your favourite matches</p>
      </div>
    </section>
  );
};

export default Sport;
