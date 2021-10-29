import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './Hero.css'
const Hero = () => {
    return (
      <div className="hero-bg d-md-flex justify-content-center align-items-center pb-3">
        <div className="col-md-6 ">
          <div className="px-md-3">
            <h1 className="display-1 fw-bolder text-white">
              The Express
              <span className="text-warning">Food Delivery Service</span>
            </h1>
            <p className="fs-4 text-light">
              It's the food and groceries you love, delivered.It's simple: we
              list your menu and product lists online, help you process orders.
                    </p>
                    <button className="btn btn-warning fw-bold py-3 px-5 mb-5">Login Here For Order Food</button>
          </div>
        </div>
        <div className="col-md-6 ">
          <img
            src="https://i.ibb.co/WpmLsJq/hero-Right.png"
            alt=""
            className="img-fluid "
          />
        </div>
      </div>
    );
};

export default Hero;