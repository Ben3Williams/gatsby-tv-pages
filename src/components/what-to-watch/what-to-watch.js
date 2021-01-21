import React from 'react';

import entImg1 from '../../images/what-to-watch/proven-innocent.jpg';
import entImg2 from '../../images/what-to-watch/david-jason.jpg';
import entImg3 from '../../images/what-to-watch/vikings.jpg';
import amcImg1 from '../../images/what-to-watch/an-accidental-studio.jpg';
import amcImg2 from '../../images/what-to-watch/snatch.jpg';
import amcImg3 from '../../images/what-to-watch/son.jpg';

import './what-to-watch.scss';

const WhatToWatch = () => (
  <section className="what-to-watch">
    <h2 className="what-to-watch__title">What to watch on your new channels</h2>
    <h3 className="what-to-watch__channel-title">Entertainment</h3>
    <div className="what-to-watch__channel-highlight">
      <img
        src={entImg1}
        alt="Proven Innocent on Universal TV"
        className="what-to-watch__image"
        loading="lazy"
      />
      <h4 className="what-to-watch__show-title">Proven Innocent</h4>
      <p className="what-to-watch__show-copy">
        Wrongful convictions are rife in new courtroom drama Proven Innocent. A
        must-see on Universal TV.
      </p>
    </div>
    <div className="what-to-watch__channel-highlight">
      <img
        src={entImg2}
        alt="David Jason: Planes, Trains and Automobiles"
        className="what-to-watch__image"
        loading="lazy"
      />
      <h4 className="what-to-watch__show-title">
        David Jason: Planes, Trains and Automobiles
      </h4>
      <p className="what-to-watch__show-copy">
        Join national treasure David Jason as he takes on the West Coast of
        the&nbsp; US in his new travel series.
      </p>
    </div>
    <div className="what-to-watch__channel-highlight">
      <img
        src={entImg3}
        alt="Vikings season 5"
        className="what-to-watch__image"
        loading="lazy"
      />
      <h4 className="what-to-watch__show-title">Vikings</h4>
      <p className="what-to-watch__show-copy">
        The sons of Ragnar continue their quest for vengeance in a
        shield-splitting season 5. Coming soon.
      </p>
    </div>
    <h3 className="what-to-watch__channel-title">AMC</h3>
    <div className="what-to-watch__channel-highlight">
      <img
        src={amcImg1}
        alt="An Accidental Studio"
        className="what-to-watch__image"
        loading="lazy"
      />
      <h4 className="what-to-watch__show-title">An Accidental Studio</h4>
      <p className="what-to-watch__show-copy">
        23 films, ten years, one Beatle. The story of George Harrison’s
        risk-taking film studio. Available now.
      </p>
    </div>
    <div className="what-to-watch__channel-highlight">
      <img
        src={amcImg2}
        alt="Snatch"
        className="what-to-watch__image"
        loading="lazy"
      />
      <h4 className="what-to-watch__show-title">Snatch</h4>
      <p className="what-to-watch__show-copy">
        Have-a-go hustlers are thrown into the murky world of organised crime.
        Watch both seasons now.
      </p>
    </div>
    <div className="what-to-watch__channel-highlight">
      <img
        src={amcImg3}
        alt="The Son"
        className="what-to-watch__image"
        loading="lazy"
      />
      <h4 className="what-to-watch__show-title">The Son</h4>
      <p className="what-to-watch__show-copy">
        Pierce Brosnan goes from family man to ruthless killer in The Son on
        AMC. Catch up on season 1 now.
      </p>
    </div>
  </section>
);

export default WhatToWatch;
