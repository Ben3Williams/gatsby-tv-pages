import React from 'react';
import PropTypes from 'prop-types';

import './btn.scss';

const Btn = (props) => (
  <a {...props}>{props.text}</a>
);

Btn.propTypes = {
  href: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Btn;
