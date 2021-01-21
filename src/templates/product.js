import React from 'react';
import { If } from "react-if";

import Layout from '../components/layout/layout';
import Hero from '../components/hero/hero';
import Header from '../components/header/header';
import ProductCard from "../components/product-card/product-card";
import SEO from '../components/seo';
import WhatToWatch from '../components/what-to-watch/what-to-watch';
import Continue from '../components/continue/continue';
import Legals from '../components/legals/legals';
import Ready from '../components/ready/ready';
import Sport from '../components/sport/sport';
import Faqs from '../components/faqs/faqs';

const ProductPage = (props) => {
  const product = props.pageContext.product;

  return (
    <Layout>
      <SEO title="Home" />
      <Hero
        bannerClass={product.banner_class}
        bannerText={product.banner_text}
      />
      <Header packageOneHeaderText={product.package_1_header} />
      <ProductCard
        packageOneMerchStrip={product.package_1_yellow_banner}
        packageOneImage={product.package_1_image}
        packageOneTitle={product.package_1_title}
        packageOneChannelNumber={product.package_1_channels}
        packageOneSalesMessage={product.package_1_sales_message}
        packageOneBpOne={product.package_1_bp_1}
        packageOneBpTwo={product.package_1_bp_2}
        packageOneBpThree={product.package_1_bp_3}
        packageOneBpFour={product.package_1_bp_4}
        packageOneBpFive={product.package_1_bp_5}
        packageOneBpSix={product.package_1_bp_6}
        packageOnePrice={product.package_1_price}
        packageOneStandardPrice={product.package_1_standard_price}
        packageOneContract={product.package_1_contract}
        packageOneCtaText={product.package_1_cta_name}
        packageOneCtaLink={product.package_1_cta_url}
      />
      <If condition={product.package_2_header !== ""}>
        <Header packageTwoHeaderText={product.package_2_header} />
      </If>
      <If condition={product.package_2_title !== ""}>
        <ProductCard 
          packageTwoMerchStrip={product.package_2_yellow_banner}
          packageTwoImage={product.package_2_image}
          packageTwoTitle={product.package_2_title}
          packageTwoChannelNumber={product.package_2_channels}
          packageTwoSalesMessage={product.package_2_sales_message}
          packageTwoBpOne={product.package_2_bullet_point_1}
          packageTwoBpTwo={product.package_2_bullet_point_2}
          packageTwoBpThree={product.package_2_bullet_point_3}
          packageTwoBpFour={product.package_2_bullet_point_4}
          packageTwoBpFive={product.package_2_bullet_point_5}
          packageTwoBpSix={product.package_2_bullet_point_6}
          packageTwoPrice={product.package_2_price}
          packageTwoStandardPrice={product.package_2_standard_price}
          packageTwoContract={product.package_2_contract}
          packageTwoCtaText={product.package_2_cta_name}
          packageTwoCtaLink={product.package_2_cta}
        />
      </If>
      <WhatToWatch />
      <Sport displaySportModule={product.show_sports_module} />
      <Continue />
      <Ready />
      <Faqs />
      <Legals
        packageOneLegals={product.package_1_legals}
        packageTwoLegals={product.package_2_legals}
      />
    </Layout>
  );
};

export default ProductPage;
