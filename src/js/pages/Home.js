// @ts-nocheck
import React from 'react';
import DealsSection from './sections/deals/DealsSection';
import ProductsSection from './sections/products/ProductsSection';
import PreviewSection from './sections/preview/PreviewSection';
import BannerSection from './sections/banner/BannerSection';
import ShoppingSection from './sections/shopping/ShoppingSection';

import './home.scss';
import BranchesSection from './sections/branches/BranchesSection';

export default function Home() {
  return (
    <div id="home">
      <BannerSection />
      <ShoppingSection />
      <BranchesSection />
      <DealsSection />
      <PreviewSection />
      <ProductsSection />
    </div>
  );
}
