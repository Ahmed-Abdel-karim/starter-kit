// @ts-nocheck
import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import SimpleGrid from '../../common/simpleGrid/SimpleGrid';
import { categoriesList } from './data';
import logoIcon from '../../../images/icons/logo_s.png';
import locationIcon from '../../../images/icons/location_l.png';
import messageIcon from '../../../images/icons/message.png';
import nasNavIcon from '../../../images/icons/nasnav.png';
import paymenetIcons from '../../../images/icons/payment.png';

import './footer.scss';
import InputWithButton from '../../common/inputwithButton/InputWithButton';

export default function Footer() {
  return (
    <footer className="footer section-margin container">
      <Row>
        <Col lg={4}>
          <Row>
            <Col sm={12}>
              <img src={logoIcon} alt="logo" />
            </Col>
            <ul className="categories">
              <SimpleGrid xs={6} sm={6} md={6} lg={4} items={categoriesList}>
                {item => (
                  <li className="category-item">
                    <a href="#s">{item.text}</a>
                  </li>
                )}
              </SimpleGrid>
            </ul>
          </Row>
        </Col>
        <Col lg={4} className="flex-center">
          <div className="find-store">
            <div className="title-group">
              <img src={locationIcon} alt="icon" />
              <div className="title">
                <strong>Find a</strong> carrefour store
              </div>
            </div>
            <Button> Fine a Store </Button>
          </div>
        </Col>
        <Col lg={4} className="flex-center">
          <div className="find-store">
            <div className="title-group">
              <img src={messageIcon} alt="icon" />
              <div className="title">
                <strong>Subscribe to</strong> carrefour store
              </div>
            </div>
            <InputWithButton
              buttonProps={{
                variant: 'secondary-outline',
                style: {
                  color: 'red'
                }
              }}
            >
              subscribe
            </InputWithButton>
          </div>
        </Col>
      </Row>
      <Row className="my-5">
        <Col xs={12} sm={12} md={4}>
          <strong>© Careefour Store . Inc</strong>
        </Col>
        <Col xs={12} sm={12} md={4} className="paymant">
          <img src={paymenetIcons} alt="icons" />
        </Col>
        <Col xs={12} sm={12} md={4}>
          <div className="nasnav">
            <strong className="strong">Powerd by</strong>
            <img src={nasNavIcon} alt="" />
          </div>
        </Col>
      </Row>
    </footer>
  );
}
