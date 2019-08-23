// @ts-nocheck
import React from 'react';
import { Button } from 'react-bootstrap';
import arrowIcon from '../../../images/icons/arrow.png';

import './banner-card.scss';

export default function BannerCard() {
  return (
    <section className="bannerCard">
      <h4>
        <strong>FAST FOOD</strong> ON CARREFOUR HERE NOW
      </h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
      </p>
      <Button className="btn-round float-right">
        <img alt="" src={arrowIcon} />
      </Button>
    </section>
  );
}
