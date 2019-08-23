// @ts-nocheck
/* eslint-disable import/no-unresolved */
import React from 'react';
import DropdownMenu from '../../common/dropdown/DropdownMenu';
import LinkItem from './LinkItem';
import MainNavbar from '../../common/mainNavbar/MainNavbar';
import { paymentIcons, categoriesList, sidelinks } from './data';

import './header.scss';

export default function Header() {
  return (
    <header>
      <section className="top-bar bg-primary text-white">
        <div className="container">
          <div className="d-inline-block">
            {paymentIcons.map(({ src, alt }) => (
              <img src={src} alt={alt} key={alt} className="icon" />
            ))}
            <section className="d-inline-block">
              <DropdownMenu items={['EGP', 'USD']} />
            </section>
          </div>
          <ul className="links-list d-inline-block">
            {sidelinks.map(({ icon, text, href }) => (
              <LinkItem key={text} icon={icon} text={text} href={href} />
            ))}
          </ul>
        </div>
      </section>

      <section className="search-bar">
        <MainNavbar />
      </section>

      <ul className="category-list list-unstyled">
        <div className="container">
          {categoriesList.map(({ text, icon }) => (
            <li key={text}>
              <img src={icon} alt="icon" />
              <span>{text}</span>
            </li>
          ))}
          <section className="more" />
        </div>
      </ul>
    </header>
  );
}
