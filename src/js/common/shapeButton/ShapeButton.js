// @ts-nocheck
/* eslint-disable react/prop-types */
import React from 'react';
import { Button } from 'react-bootstrap';
import shape from '../../../images/icons/shape.png';

import './shape-button.scss';

export default function ShapeButton({ children, className }) {
  return (
    <section className={`shape-button ${className}`}>
      <div className="shape-container">
        <img src={shape} alt="cartIcon" className="shape" />
      </div>
      <Button variant="dark" className="btn-shape">
        {children}
      </Button>
    </section>
  );
}
