/* eslint-disable react/prop-types */
// @ts-nocheck
import React from 'react';

import './title-group.scss';

export default function TitleGroup({ title, sub, center }) {
  const style = {
    textAlign: center ? 'center' : ''
  };
  return (
    <div className="title-group" style={style}>
      <h2>{title}</h2>
      <sub>{sub}</sub>
    </div>
  );
}

TitleGroup.defaultProps = {
  title: '',
  sub: ''
};
