/* eslint-disable import/no-useless-path-segments */
// @ts-nocheck
import React from 'react';
import ControlledCarousel from '../../common/controlledCarousel/ControlledCarousel';
import CategoryList from './CategoryList';
import { categories } from './data';

import './category-item.scss';

const Items = categories.map(group => <CategoryList items={group} />);

export default function CategoryCarousel() {
  return (
    <div className="category-carousel">
      <ControlledCarousel items={Items} interval={50000} />
    </div>
  );
}
