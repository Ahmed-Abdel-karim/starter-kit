/* eslint-disable react/prop-types */
// @ts-nocheck
import React, { useState, useEffect, useRef } from 'react';
import { createUseStyles } from 'react-jss';
import clsx from 'classnames';

const useItemStyles = createUseStyles(theme => {
  return {
    title: {
      ...theme.typography.h6,
      color: theme.colors.text.primary,
      width: '100%',
      background: 'transparent',
      border: `1px solid ${theme.colors.divider}`,
      borderRadius: '2px',
      padding: '9px 6px',
      justifyContent: 'space-between',
      display: 'flex',
      cursor: 'pointer',
      '&:hover': {
        color: theme.colors.text.secondary,
        boxShadow: `1px 1px 4px ${theme.colors.divider}`
      }
    },
    content: {
      ...theme.typography.body2,
      color: theme.colors.text.secondary,
      overflow: 'hidden',
      trasition: 'all 2s ease',
      height: 0
    },
    visible: {
      height: props => props.innerHeight
    }
  };
});

const Item = ({ handleToggle, active, value, title = 'title' }) => {
  const innerRef = useRef(null);
  const classes = useItemStyles({ innerHeight: 200 });
  const isActive = Array.isArray(active) ? active.includes(value) : active === value;
  const handleClick = () => handleToggle(value);
  return (
    <li>
      <button onClick={handleClick} className={classes.title} type="button" value={value}>
        <span>{title}</span>
        <i>+</i>
      </button>
      <section className={clsx(classes.content, { [classes.visible]: isActive })} ref={innerRef}>
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at
        its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as
        opposed to using Content here, content here, making it look like readable English. Many desktop publishing
        packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will
        uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by
        accident, sometimes on purpose (injected humour and the like).
      </section>
    </li>
  );
};

const useListStyle = createUseStyles(() => {
  return {
    list: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
      width: '100%'
    }
  };
});

const Accordion = ({ collapse = 'single' }) => {
  const [active, setActive] = useState([]);
  const { list } = useListStyle();

  useEffect(() => {
    if (collapse === 'single') setActive('');
  }, [collapse]);

  const handleMulti = value => {
    if (active.includes(value)) {
      setActive(active.filter(i => i !== value));
    } else {
      setActive([...active, value]);
    }
  };

  const handleSingle = value => {
    if (active === value) {
      setActive('');
    } else {
      setActive(value);
    }
  };

  const handleToggle = value => {
    if (collapse === 'multi') {
      handleSingle(value);
    } else {
      handleMulti(value);
    }
  };

  return (
    <ul className={list}>
      <Item handleToggle={handleToggle} active={active} value="sample" />
      <Item handleToggle={handleToggle} active={active} value="cack" />
      <Item handleToggle={handleToggle} active={active} value="ball" />
    </ul>
  );
};

export default Accordion;
