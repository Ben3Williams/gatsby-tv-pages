import React from 'react';

import './header.scss';

const Header = (props) => {
  const packageOneHeader = props.packageOneHeaderText;

  return(
    <section className="header">
      <h2>{packageOneHeader}</h2>
    </section>
    )
};

export default Header;
