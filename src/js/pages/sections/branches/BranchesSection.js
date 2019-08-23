// @ts-nocheck
import React from 'react';
import TitleGroup from '../../../common/titleGroup/TitleGroup';
import SimpleGrid from '../../../common/simpleGrid/SimpleGrid';
import { branches } from './data';

import './branches-section.scss';

export default function BranchesSection() {
  return (
    <section className="branches section-margin">
      <div className="container">
        <TitleGroup title="BROWSE BY BRANCH" sub="Choose the branch closest to you" center />
        <SimpleGrid items={branches} sm={6} md={3}>
          {({ src }) => <img src={src} alt="branch" width="100%" />}
        </SimpleGrid>
      </div>
    </section>
  );
}
