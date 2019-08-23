/* eslint-disable import/no-useless-path-segments */
/* eslint-disable react/prop-types */
// @ts-nocheck
import React from 'react';
import ControlledCarousel from '../../common/controlledCarousel/ControlledCarousel';
import './main-carousel.scss';

const CarouselItem = ({ no }) => <div className={`main-carousel-item item-${no}`} />;

const items = [CarouselItem({ no: 1 }), CarouselItem({ no: 2 }), CarouselItem({ no: 3 }), CarouselItem({ no: 4 })];

export default function MainCarousel() {
  return (
    <section className="main-carousel">
      <ControlledCarousel items={items} controls={false} interval={3000} fade />
    </section>
  );
}
