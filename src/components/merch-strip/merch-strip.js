import React from 'react';
import PropTypes from 'prop-types';

import './merch-strip.scss';

const MerchStrip = (props) => (
  <p className="merch-strip" {...props}>{props.text}</p>
);

MerchStrip.propTypes = {
  text: PropTypes.string.isRequired,
};

export default MerchStrip;
