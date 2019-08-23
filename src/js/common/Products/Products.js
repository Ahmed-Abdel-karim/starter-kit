/* eslint-disable react/prop-types */
// @ts-nocheck
import React from 'react';
import { Row, Col } from 'react-bootstrap';
import TitleGroup from '../titleGroup/TitleGroup';
import Filters from '../filters/Filters';
import PaginationButton from '../paginationButton/PaginationButton';
import useProductState from '../useProductState/useProductState';
import SimpleGrid from '../simpleGrid/SimpleGrid';
import ProductCard from '../productCard/ProductCard';

import './products.scss';

export default function Products({ categories, pageSize, col, title, sub, deals }) {
  const { setFilter, handleNext, handlePrev, page, active, products } = useProductState({ pageSize, deals });
  return (
    <>
      <Row>
        <Col xs={12} sm={12} md={12} lg={6}>
          <TitleGroup title={title} sub={sub} />
        </Col>
        <Col xs={12} sm={12} md={12} lg={6}>
          <Filters setFilter={setFilter} items={categories} active={active} />
        </Col>
      </Row>
      <section className="products">
        <PaginationButton
          className="left"
          handleClick={handlePrev}
          left
          prev
          page={page}
          total={products.total}
          pageSize={pageSize}
        />
        <SimpleGrid xs={col} sm={col} md={col} lg={col} items={products.list}>
          {product => <ProductCard key={product.desc} {...product} />}
        </SimpleGrid>
        <PaginationButton
          className="right"
          handleClick={handleNext}
          page={page}
          next
          total={products.total}
          pageSize={pageSize}
        />
      </section>
    </>
  );
}
