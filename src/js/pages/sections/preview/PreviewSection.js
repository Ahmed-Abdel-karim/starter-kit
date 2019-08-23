// @ts-nocheck
import React from 'react';
import './preview-section.scss';
import SimpleGrid from '../../../common/simpleGrid/SimpleGrid';
import { sections } from './data';
import PreviewCard from '../../../common/PreviewCard/PreviewCard';

export default function PreviewSection() {
  return (
    <div className=".preview-section section-margin">
      <div className="container">
        <SimpleGrid items={sections} xs={12} sm={12} md={4} lg={4}>
          {card => <PreviewCard {...card} />}
        </SimpleGrid>
      </div>
    </div>
  );
}
