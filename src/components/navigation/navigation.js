import React from 'react';
import navLogo from '../../images/bt-logo.svg';

import './navigation.scss';

const Navigation = () => {

  return(
    <nav className="navigation">
      <img src={navLogo} alt="BT Logo" className="navigation__logo"/>
    </nav>
    )
};

export default Navigation;
