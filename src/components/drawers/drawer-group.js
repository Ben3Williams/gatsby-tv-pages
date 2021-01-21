import React from 'react';
import PropTypes from 'prop-types';
import { Accordion } from 'react-accessible-accordion';

import './drawers.scss';

export default function DrawerGroup(props) {
  return (
    <Accordion className="drawers">
      {props.children}
    </Accordion>
  )
}

DrawerGroup.propTypes = {
  children: PropTypes.any.isRequired
};
