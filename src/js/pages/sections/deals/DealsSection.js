/* eslint-disable react/prop-types */
// @ts-nocheck
import React from 'react';
import Media from 'react-media';
import Products from '../../../common/Products/Products';
import { categories } from './data';

export default function DealsSection() {
  const commno = {
    title: 'Hot Deals',
    sub: 'New Hot Deals Now ',
    categories,
    deals: true
  };
  return (
    <section className="deals section-margin">
      <div className="container align-items-center">
        <Media query={{ maxWidth: 575.98 }}>{match => match && <Products {...commno} pageSize={1} col={12} />}</Media>
        <Media query={{ minWidth: 576, maxWidth: 767.98 }}>
          {match => match && <Products {...commno} pageSize={2} col={6} />}
        </Media>
        <Media query={{ minWidth: 768, maxWidth: 991.98 }}>
          {match => match && <Products {...commno} pageSize={3} col={4} />}
        </Media>
        <Media query={{ minWidth: 992 }}>{match => match && <Products {...commno} pageSize={4} col={3} />}</Media>
      </div>
    </section>
  );
}
