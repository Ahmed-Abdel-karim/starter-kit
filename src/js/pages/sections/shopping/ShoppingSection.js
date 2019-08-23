// @ts-nocheck
import React from 'react';
import TitleGroup from '../../../common/titleGroup/TitleGroup';
import CategoryCarousel from '../../../common/categoryCarousel/CategoryCarousel';
import SimpleGrid from '../../../common/simpleGrid/SimpleGrid';
import { benifitsList } from './data';

import './shopping-section.scss';

export default function ShoppingSection() {
  return (
    <section className="categories-shopping section-margin">
      <div className="container">
        <TitleGroup title="SHOPPING BY CATEGORY" sub="online shopping for every thing" />
      </div>
      <CategoryCarousel />
      <section className="benifits container ">
        <SimpleGrid items={benifitsList} sm={6} md={6} lg={3}>
          {({ text, sub, icon }) => (
            <div key={text} className="benifits-item">
              <div className="icon-container">
                <img src={icon} alt="icon" />
              </div>
              <div className="text-container">
                <span className="title">{text}</span>
                <span className="sub">{sub}</span>
              </div>
            </div>
          )}
        </SimpleGrid>
      </section>
    </section>
  );
}
