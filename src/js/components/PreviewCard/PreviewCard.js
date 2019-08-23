/* eslint-disable react/prop-types */
import React from 'react';

import './preview-card.scss';

export default function PreviewCard({ title, href }) {
  return (
    <div className="preview-card">
      <p>{title}</p>
      <a href={href}>Shop Now</a>
    </div>
  );
}
