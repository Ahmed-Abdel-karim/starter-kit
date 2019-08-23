// @ts-nocheck
/* eslint-disable react/prop-types */
import React from 'react';
import { Button } from 'react-bootstrap';
import DropdownMenu from '../dropdown/DropdownMenu';
import productImg1 from '../../../images/products/p1.png';
import productImg2 from '../../../images/products/p2.png';
import productImg3 from '../../../images/products/p3.png';
import productImg4 from '../../../images/products/p4.png';

import './product-card.scss';

export default function ProductCard({ sale, beforPrice, currentPrice, img, desc, lastUpdate, category }) {
  const fakeImg = () => {
    switch (category) {
      case 'superMarket':
        return productImg4;
      case 'babyWorld':
        return productImg1;
      case 'TV':
        return productImg2;
      default:
        return productImg3;
    }
  };

  return (
    <div className="product-card">
      {sale && (
        <div className="sale">
          Sale <span className="amount">{sale} % </span>
        </div>
      )}
      <div className="img-container">
        <img src={fakeImg()} alt={desc} />
      </div>
      <div className="price-group">
        <span className="current">{currentPrice} $</span>
        <span className="before">{beforPrice} $</span>
      </div>
      <div className="desc">{desc}</div>
      <div className="add">
        <section className="dropdown-container">
          <DropdownMenu items={[1, 5, 10, 15]} variant="white" />
        </section>
        <Button variant="secondary">add</Button>
      </div>
      <div className="last-update">{`last update ${lastUpdate}`}</div>
    </div>
  );
}

ProductCard.defaultProps = {
  beforPrice: 120,
  currentPrice: 300,
  img: productImg3,
  desc: 'Pampers Premium Care New ',
  date: '24/12/2018'
};
