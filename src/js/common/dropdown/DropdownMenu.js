/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Dropdown } from 'react-bootstrap';

export default function DropdownMenu(props) {
  const { variant, items, title, buttonClassName, id, rootClass } = props;
  const [selectedItem, setItem] = useState(items[0]);
  const handleSelectedItem = val => {
    setItem(val);
  };
  return (
    <Dropdown className={`d-inline-block w-100 ${rootClass}`}>
      <Dropdown.Toggle variant={variant} className={`w-100 ${buttonClassName}`} id={id || 'dropdown-basic'}>
        <span className="font-weight-bold">{title || selectedItem}</span>
      </Dropdown.Toggle>
      <Dropdown.Menu className={`w-100 ${buttonClassName}`}>
        {items.map(i => (
          <Dropdown.Item onClick={() => handleSelectedItem(i)} key={i}>
            {i}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}

DropdownMenu.defaultProps = {
  variant: 'primary',
  items: [],
  rootClass: ''
};
