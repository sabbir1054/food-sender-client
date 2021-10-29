import React from "react";
import { Col, Row } from "react-bootstrap";
import './Feature.css'
const Feature = () => {
  return (
    <div className="bg-dark">
      <Row className="d-md-flex justify-content-center align-items-center">
        <Col md="6">
          <img
            src="https://i.ibb.co/Xx6nwcx/sit-photo.jpg"
            className="img-fluid"
            alt=""
          />
        </Col>
        <Col md="6" className="feature-right px-3">
          <h1 className="display-4 fw-bolder text-white">
            Sit at Home
            <span className="text-warning"> We Will Take Care</span>
          </h1>
          <p className="fs-5 text-light text-justify">
            <b>
              Order food from the best restaurants and shops with Food Sender
            </b>{" "}
            <br />
            Are you hungry? Did you have a long and stressful day? Interested in
            getting a cheesy pizza delivered to your office or looking to avoid
            the weekly shop? Then Food Sender Bangladesh is the right
            destination for you! Food Sender offers you a long and detailed list
            of the best restaurants and shops near you to help make your
            everyday easier
          </p>
          <div className="d-sm-flex justify-content-center align-items-center">
            <div className="col-sm-3 text-center">
              <i className="text-warning fs-3 fas fa-shipping-fast"></i>
              <p className="text-warning ">Fast Delivery</p>
            </div>
            <div className="col-sm-3 text-center">
              <i className="text-warning fs-3 fas fa-mobile-alt"></i>
              <p className="text-warning">Mobile App Service</p>
            </div>
            <div className="col-sm-3 text-center">
              <i className="text-warning fs-3 fas fa-map-marked-alt"></i>
              <p className="text-warning">Wide Coverage Map</p>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Feature;
