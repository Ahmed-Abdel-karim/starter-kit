/* eslint-disable react/prop-types */
import React from 'react';
import { Button } from 'react-bootstrap';
import Input from '../../components/input/Input';

import './input-with-button.scss';

export default function InputWithButton({ inputProps, buttonProps, children }) {
  return (
    <form className="inputGroup">
      <Input className="input" {...inputProps} />
      <Button className="button" {...buttonProps}>
        {children}
      </Button>
    </form>
  );
}
