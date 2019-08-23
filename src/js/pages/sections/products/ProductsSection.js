/* eslint-disable react/prop-types */
// @ts-nocheck
import React from 'react';
import Media from 'react-media';
import Products from '../../../common/Products/Products';
import { categories } from './data';

import './products-section.scss';

export default function ProductsSection() {
  const commno = {
    title: 'Our Products',
    sub: 'Browse our fascinating sections!',
    categories
  };
  return (
    <div className="align-items-center products-section section-margin">
      <div className="container">
        <Media query={{ maxWidth: 575.98 }}>{match => match && <Products {...commno} pageSize={1} col={12} />}</Media>
        <Media query={{ minWidth: 576, maxWidth: 767.98 }}>
          {match => match && <Products {...commno} pageSize={2} col={6} />}
        </Media>
        <Media query={{ minWidth: 768, maxWidth: 991.98 }}>
          {match => match && <Products {...commno} pageSize={3} col={4} />}
        </Media>
        <Media query={{ minWidth: 992 }}>{match => match && <Products {...commno} pageSize={8} col={3} />}</Media>
      </div>
    </div>
  );
}
