/* eslint-disable react/prop-types */
import { Row, Col } from 'react-bootstrap';

import React from 'react';

export default function SimpleGrid({ rowProps, items, colProps, xs, sm, md, lg, xl, children }) {
  return (
    <Row {...rowProps}>
      {items.map(item => (
        <Col xs={xs} sm={sm} md={md} lg={lg} xl={xl} className="row-margin" {...colProps}>
          {children(item)}
        </Col>
      ))}
    </Row>
  );
}

SimpleGrid.defaultProps = {
  rowProps: {},
  colProps: {},
  items: []
};
