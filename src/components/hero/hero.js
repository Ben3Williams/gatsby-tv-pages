import React from 'react';

import './hero.scss';

import desktopImage from '../../images/banners/hero-desktop.jpg';
import tabletImage from '../../images/banners/hero-tablet.jpg';
import mobileImage from '../../images/banners/hero-mobile.jpg';

const Hero = (props) => {
  const bannerClass = props.bannerClass;
  const bannerText = props.bannerText;
  
  return ( 
    <section className={"hero"}>
      <picture className = "hero__image-container">
        <source
          className="hero__image"
          media="(min-width: 1200px)"
          srcSet={desktopImage}/>
        <source
          className="hero__image"
          media="(min-width: 600px)"
          srcSet={tabletImage}/>
        <source
          className="hero__image"
          media="(min-width: 320px)"
          srcSet={mobileImage}/>
        <img
          className="hero__image"
          src={desktopImage}
          alt={bannerClass}
        />
      </picture>
      <div className="hero__content">
        <h1>{bannerText}</h1>
      </div>
    </section>
  )

};

export default Hero;