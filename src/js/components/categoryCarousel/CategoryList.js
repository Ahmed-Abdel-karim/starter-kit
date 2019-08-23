/* eslint-disable react/prop-types */
// @ts-nocheck
import React from 'react';
import SimpleGrid from '../../common/simpleGrid/SimpleGrid';

export default function CategoryList({ items }) {
  return (
    <div className="container">
      <SimpleGrid items={items} xs={4} sm={4} md={4} lg={2} xl={2}>
        {({ src, href }) => (
          <div className="category-item">
            <a href={href} className="round-box">
              <img src={src} alt="icons" width="75%" />
            </a>
          </div>
        )}
      </SimpleGrid>
    </div>
  );
}

CategoryList.defaultProps = {
  items: []
};
