import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import './Footer.css'
const Footer = () => {
  return (
    <div>
      <div className="bg-dark">
        <Container className="pt-3">
          <Row>
            <Col md="3">
              <h3 className="display-5 fw-normal logo text-warning">
                Food Sender
              </h3>
              <p className="text-light">
                It's the food and groceries you love, delivered.It's simple: we
                list your menu and product lists online, help you process
                orders!
              </p>
            </Col>
            <Col md="6 ">
              <h3 className=" fw-normal logo text-light text-center">
                Follow Us On
              </h3>
              <div className="d-flex justify-content-center mt-5">
                <a
                  href="https://www.facebook.com/sabbir1054"
                  className="text-decoration-none fw-normal text-light"
                  target="blank"
                >
                  <i className="mx-4 fab fa-facebook fs-3"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/md-sabbir-hossain-1054/"
                  target="blank"
                  className="text-decoration-none fw-normal text-light"
                >
                  <i className="mx-4 fab fa-linkedin fs-3"></i>
                </a>
                <a
                  href="https://www.instagram.com/_muhammad_sabbir_hossain/"
                  target="blank"
                  className="text-decoration-none fw-normal text-light"
                >
                  <i className="mx-4 fab fa-instagram-square fs-3"></i>
                </a>
                <a
                  href="https://github.com/sabbir1054"
                  target="blank"
                  className="text-decoration-none fw-normal text-light"
                >
                  <i className="mx-4 fab fa-github-square fs-3"></i>
                </a>
                <a
                  href="https://twitter.com/Muhamma95959532"
                  target="blank"
                  className="text-decoration-none fw-normal text-light"
                >
                  <i className="mx-4 fab fa-twitter fs-3"></i>
                </a>
              </div>
            </Col>
            <Col md="3">
              <h3 className=" fw-normal logo text-light text-center">
                Important Link
              </h3>
              <ul>
                <li>
                  <NavLink to="/home" className=" fw-normal mx-3 text-light">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavHashLink
                    to="/home/#foods"
                    className=" fw-normal mx-3 text-light"
                  >
                    Hot Deals
                  </NavHashLink>
                </li>
                <li>
                  <NavLink
                    to="/placeOrder"
                    className=" fw-normal mx-3 text-light"
                  >
                    Place Order
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/login" className=" fw-normal mx-3 text-light">
                    Login
                  </NavLink>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
      <footer className='py-2'>
        <p className='text-center text-white'>All right reserved by Food Sender © 2021-2025</p>
      </footer>
    </div>
  );
};

export default Footer;
