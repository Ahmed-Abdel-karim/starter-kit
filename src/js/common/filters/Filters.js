/* eslint-disable react/prop-types */
// @ts-nocheck
import React, { useEffect } from 'react';
import './filters.scss';

export default function Filters({ active, setFilter, items }) {
  useEffect(() => {
    if (items[0]) setFilter(items[0].value);
  }, []);

  return (
    <ul className="filters">
      {items.map(({ name, value }) => {
        return (
          <li key={value}>
            <button
              key={value}
              type="button"
              className={`filter-item ${value === active ? 'active' : ''}`}
              onClick={() => setFilter(value)}
            >
              {name}
            </button>
            <span className="highlight" />
          </li>
        );
      })}
    </ul>
  );
}
