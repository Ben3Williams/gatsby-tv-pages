import React from 'react';
import Btn from '../btn/btn';

import './ready.scss';

const Ready = () => (
  <section className="ready">
    <p className="h4 ready__text">
      Are you ready to get all this for <span className="ready__text--highlight">&pound;X.XX</span> a month?
    </p>
    <Btn 
      href="http://www.bt.com"
      className="btn btn--purchase"
      text="Link to the OJ"
    />
  </section>
);

export default Ready;
