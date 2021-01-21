import React from 'react';
import footerLogo from '../../images/bt-logo.svg';

import './footer.scss';

const Footer = () => {

  return(
    <footer className="footer">
      <p>&copy; BT 2020</p>
      <img src={footerLogo} alt="BT Logo" className="footer__logo"/>
    </footer>
    )
};

export default Footer;
