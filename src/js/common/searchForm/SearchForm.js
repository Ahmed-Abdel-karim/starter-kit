// @ts-nocheck
import React from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import Media from 'react-media';
import DropdownMenu from '../dropdown/DropdownMenu';
import searchIcon from '../../../images/icons/search.png';

import './search-form.scss';
import Input from '../../components/input/Input';

export default function SearchForm() {
  return (
    <Media query="(min-width: 992px)">
      {matches => (
        <Form inline className="searchForm d.inline-block">
          <Row className="flex-grow-1">
            <Col xs={12} sm={12} md={8} lg={10}>
              <Row>
                <Col xs={12} md={4} lg={4} className={matches && 'mgr--15'}>
                  <DropdownMenu
                    variant="outlined-primary"
                    items={['baby boys', 'girls', '...others']}
                    buttonClassName="btn-dropdown"
                  />
                </Col>
                <Col xs={12} md={8} lg={8} className={matches && 'mgl--15 mgr--30'}>
                  <Input type="text" placeholder="Search" className={`${matches ? 'custom-width' : 'w-100'}`} />
                </Col>
              </Row>
            </Col>
            <Col xs={12} sm={12} md={4} lg={2} className="align-self-center">
              <Button variant="primary" className="btn-search">
                <img src={searchIcon} alt="attr" />
              </Button>
            </Col>
          </Row>
        </Form>
      )}
    </Media>
  );
}
