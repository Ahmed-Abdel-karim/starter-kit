/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
// @ts-nocheck
import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

export default function ControlledCarousel({ items, id, className, ...restProps }) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(null);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    setDirection(e.direction);
  };

  return (
    <Carousel
      {...restProps}
      className={className}
      id={id}
      activeIndex={index}
      direction={direction}
      onSelect={handleSelect}
    >
      {items.map((item, i) => (
        <Carousel.Item key={i}>{item}</Carousel.Item>
      ))}
    </Carousel>
  );
}

ControlledCarousel.defaultProps = {
  items: []
};
