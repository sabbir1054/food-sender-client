import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import useAuth from "../../../Hooks/useAuth";
import "./Header.css";
const Header = () => {
    const { user, logOut } = useAuth();
    const handleLogOut = () => {
        logOut();
    }
  return (
    <>
      <Navbar bg="dark" expand="lg" variant="dark">
        <Container>
          <NavLink to="/" className="text-decoration-none text-dark">
            <h3 className="display-5 fw-normal logo text-warning">
              Food Sender
            </h3>
          </NavLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className=" mx-md-auto fw-bold logo d-flex align-items-center">
              <NavLink
                to="/home"
                className="text-decoration-none fw-normal mx-3 text-light"
              >
                Home
              </NavLink>
              <NavHashLink
                to="/home/#foods"
                className="text-decoration-none fw-normal mx-3 text-light"
              >
                Hot Deals
              </NavHashLink>
            </Nav>
            <div className="d-md-flex justify-content-space-evenly align-items-center">
              <h6 className="pt-2 text-primary fw-normal">
                {user.displayName}
              </h6>
              {user.email ? (
                <div className='d-flex align-items-center text-light'>
                  <NavDropdown
                    title="Dashboard"
                    menuVariant="dark"
                    className="fw-normal"
                    id="collasible-nav-dropdown"
                  >
                    <NavLink
                      to="/myOrder"
                      className="text-decoration-none mx-2 text-white fw-normal"
                    >
                      My Order
                    </NavLink>
                    <NavDropdown.Divider />
                    <NavDropdown.Item>
                      <NavLink
                        to="/addNew"
                        className="text-decoration-none fw-normal mx-3 text-light"
                      >
                        Add New Food
                      </NavLink>
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavLink
                      to="/manageOrders"
                      className="text-decoration-none fw-normal mx-3 text-light "
                    >
                      Manage All Orders
                    </NavLink>
                  </NavDropdown>
                  <NavLink to="/home">
                    <button
                      className="btn btn-warning mx-1"
                      onClick={handleLogOut}
                    >
                      <i className="fas fa-sign-in-alt"></i> Log Out
                    </button>
                  </NavLink>
                </div>
              ) : (
                <div>
                  <NavLink to="/login">
                    <button className="btn btn-warning mx-1">
                      <i className="fas  fa-sign-in-alt"></i> Login
                    </button>
                  </NavLink>
                </div>
              )}
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
