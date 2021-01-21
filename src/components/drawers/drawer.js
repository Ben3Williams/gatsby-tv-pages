import React from 'react';
import PropTypes from 'prop-types';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

import './drawers.scss';

export default function Drawer(props) {
  return (
    <Accordion allowZeroExpanded={true}>
      <AccordionItem className="divider divider--with-in-contrainer">
        <AccordionItemHeading>
          <AccordionItemButton className="drawers__drawer__title">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              className="drawers__drawer__title__arrow"
              aria-hidden="true"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
            <span id={props.titleId}>{props.title}</span>
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel
          className="drawers__drawer__body drawers__drawer__body--padded"
        >
          {props.children}
        </AccordionItemPanel>
      </AccordionItem>
    </Accordion>
  )
}

Drawer.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
}
