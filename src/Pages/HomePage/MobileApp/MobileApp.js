import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Mobile.css'
const MobileApp = () => {
    return (
      <div className="mbl-app-bg py-5">
        <Container>
          <Row className="d-md-flex align-items-center">
            <Col md="6">
              <h1 className="display-4 fw-bolder text-dark">
                Get More With
                <span className="text-warning"> Our Application</span>
              </h1>
              <p className="fs-5 text-secondary">
                It's all at your fingertips – the restaurants and shops you
                love. Find the right food and groceries to suit your mood, and
                make the first bite last. Go ahead, download us.
              </p>
              <div className="d-md-flex">
                <img
                  src="https://i.ibb.co/SX6xJJn/img-03.png"
                  className="mx-3 my-2 rounded store-icon"
                  alt=""
                />
                <img
                  src="https://i.ibb.co/BzSbgr5/img-02.png"
                  className="mx-3 my-2 rounded store-icon"
                  alt=""
                />
              </div>
            </Col>
            <Col md="6" className="mbl-right">
              <img
                src="https://i.ibb.co/RHhwBbw/app.png"
                className="img-fluid w-75"
                alt=""
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
};

export default MobileApp;