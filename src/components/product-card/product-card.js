import React from 'react';
import {If, Then} from 'react-if';

import Btn from '../btn/btn';
import MerchStrip from '../merch-strip/merch-strip';
import ChannelModal from '../channel-modal/channel-modal';

import maxImage from '../../images/packages/max.png';
import entertainmentImage from '../../images/packages/entertainment.png';
import starterImage from '../../images/packages/starter.png';

import './product-card.scss';

const ProductCard = (props) => {
  const packageOneMerchStrip = props.packageOneMerchStrip;
  const packageOneImage = props.packageOneImage;
  const packageOneTitle = props.packageOneTitle;
  const packageOneChannelNumber = props.packageOneChannelNumber;
  const packageOneSalesMessage = props.packageOneSalesMessage;
  const packageOneBpOne = props.packageOneBpOne;
  const packageOneBpTwo = props.packageOneBpTwo;
  const packageOneBpThree = props.packageOneBpThree;
  const packageOneBpFour = props.packageOneBpFour;
  const packageOneBpFive = props.packageOneBpFive;
  const packageOneBpSix = props.packageOneBpSix;
  const packageOnePrice = props.packageOnePrice;
  const packageOneStandardPrice = props.packageOneStandardPrice;
  const packageOneContract = props.packageOneContract;
  const packageOneCtaText = props.packageOneCtaText;
  const packageOneCtaLink = props.packageOneCtaLink;

  return(
    <section className="card">
      <MerchStrip text={packageOneMerchStrip} />
      <div className="card__details">
        <h2 className="card__title">
          {packageOneTitle}
        </h2>
        <h3 className="card__channel-number h4">
          {packageOneChannelNumber}
        </h3>
        <ChannelModal />
        <If condition={packageOneImage === 'max'}>
            <Then>
              <img
                className="card__channel-image"
                alt="Channels available on your package"
                src={maxImage}
              />
            </Then>
        </If>
        <If condition={packageOneImage === 'entertainment'}>
            <Then>
              <img
                className="card__channel-image"
                alt="Channels available on your package"
                src={entertainmentImage}
              />
            </Then>
        </If>
        <If condition={packageOneImage === 'starter'}>
          <img
            className="card__channel-image"
            alt="Channels available on your package"
            src={starterImage}
          />
        </If>
      </div>
      <div className="card__benefits">
        <p className="h3">
          {packageOneSalesMessage}
        </p>
        <ul className="card__list">
          <li>
            {packageOneBpOne}
          </li>
          <li>
            {packageOneBpTwo}
          </li>
          <li>
            {packageOneBpThree}
          </li>
          <If condition={packageOneBpFour}>
            <li>
              {packageOneBpFour}
            </li>
          </If>
          <If condition={packageOneBpFive}>
            <li>
              {packageOneBpFive}
            </li>
          </If>
          <If condition={packageOneBpSix}>
            <li>
              {packageOneBpSix}
            </li>
          </If>
        </ul>
      </div>
      <div className="card__pricing">
        <p>
          Now <span className="card__pricehighlight">&pound;
          {packageOnePrice}
          </span> a month
        </p>
        <p>
          {packageOneContract}
        </p>
        <p>Price after&nbsp;
          {packageOneContract}&nbsp;&pound;
          {packageOneStandardPrice}
        </p>
        <Btn
          href={packageOneCtaLink}
          className="btn btn--purchase"
          text={packageOneCtaText}
        />
      </div>
    </section>
  )
};

export default ProductCard;
