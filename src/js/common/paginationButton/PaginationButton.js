// @ts-nocheck
/* eslint-disable react/prop-types */
import React from 'react';
import './pagination-button.scss';

export default function PaginationButton({ handleClick, left, next, page, pageSize, total, prev, className }) {
  const hasNextPage = page * pageSize < total;
  const disabled = (prev && page < 2) || (next && !hasNextPage);

  return (
    <button
      disabled={disabled}
      className={`btn-pagination ${className} ${disabled && 'disabled'}`}
      type="button"
      onClick={handleClick}
    >
      {left ? <span>&#8592;</span> : <span>&#8594;</span>}
    </button>
  );
}
