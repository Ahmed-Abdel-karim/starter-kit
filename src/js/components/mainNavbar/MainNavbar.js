// @ts-nocheck
import React from 'react';
import { Navbar, Button, Row, Col } from 'react-bootstrap';
import logo from '../../../images/icons/logo_s.png';
import SearchForm from '../../common/searchForm/SearchForm';
import cartIcon from '../../../images/icons/cart_s.png';
import fiveIcon from '../../../images/icons/5.png';
import loginIcon from '../../../images/icons/login.png';

import './main-navbar.scss';
import ShapeButton from '../../common/shapeButton/ShapeButton';

export default function MainNavbar() {
  return (
    <Navbar bg="white" expand="lg" className="main-navbar">
      <div className="container">
        <Navbar.Brand href="#home">
          <img src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Row className="flex-grow-1 align-items-center">
            <Col xs={12} sm={12} md={12} lg={8} className="md-margin">
              <SearchForm />
            </Col>
            <Col xs={12} sm={12} md={6} lg={2} className="align-self-center md-margin">
              <section className="button-group">
                <Button variant="secondary w-50 ">
                  <img src={cartIcon} alt="cartIcon" />
                </Button>
                <ShapeButton className="w-50">
                  <img src={fiveIcon} alt="cartIcon" />
                </ShapeButton>
              </section>
            </Col>
            <Col xs={12} sm={12} md={6} lg={2} className="align-self-center md-margin">
              <Button variant="primary">
                <img src={loginIcon} alt="cartIcon" />
                <span className="mx-2 font-weight-bold">login</span>
              </Button>
            </Col>
          </Row>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}
