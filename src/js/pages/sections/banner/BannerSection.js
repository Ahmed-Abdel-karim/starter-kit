import React from 'react';
import MainCarousel from '../../../components/mainCarousel/MainCarousel';
import BannerCard from '../../../components/bannerCard/BannerCard';

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
