import React from 'react';
import MainCarousel from '../../../common/mainCarousel/MainCarousel';
import BannerCard from '../../../common/bannerCard/BannerCard';

import './banner-section.scss';

export default function BannerSection() {
  return (
    <section className="banner">
      <MainCarousel />
      <section className="banner-card-container">
        <BannerCard />
      </section>
    </section>
  );
}
