/* eslint-disable react/prop-types */
import React from 'react';

export default function LinkItem({ text, href, icon }) {
  return (
    <li key={text}>
      <a href={href}>
        <img src={icon} alt={text} />
        <span>{text}</span>
      </a>
    </li>
  );
}
