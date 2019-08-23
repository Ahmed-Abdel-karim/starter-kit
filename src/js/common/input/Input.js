/* eslint-disable react/prop-types */
import React from 'react';
import { FormControl } from 'react-bootstrap';

import './input.scss';

export default function Input({ className, ...otherProps }) {
  return <FormControl className={`mr-sm-2 ${className}`} {...otherProps} />;
}
