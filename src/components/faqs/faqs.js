import React from 'react';
import content from './faq.json';
import DrawerGroup from '../drawers/drawer-group';
import Drawer from '../drawers/drawer';

import './faqs.scss';

function Faqs() {
  return (
    <>
      <section className="faqs">
        <span className="divider divider--with-in-contrainer" />
        <h2 className="faqs__title">Frequently asked questions</h2>
        <span className="divider divider--with-in-contrainer" />
        <DrawerGroup>
          {content.map(content => (
            <Drawer key={content.Title} title={content.Title}>
              <p dangerouslySetInnerHTML={{ __html: content.Content }} />
            </Drawer>
          ))}
        </DrawerGroup>
      </section>
    </>
  );
}

export default Faqs;
