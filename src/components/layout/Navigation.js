import React from "react";
import { Link, NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import styled from "styled-components";
import { Navbar, Nav, Button, Container } from "react-bootstrap";

import { logoutUser } from "../../redux/actions/authActions";
import { clearCurrentProfile } from "../../redux/actions/profileActions";

const Navigation = props => {
  return (
    <NavbarWrapper>
      <Navbar bg="light" expand="md" collapseOnSelect={true}>
        <Navbar.Brand>
          <Link to="/">Львів без реклами</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="ml-auto">
            {props.auth.isAuthenticated && props.auth.user.role === "admin" && (
              <>
                <Nav.Item>
                  <NavLink to="/admin/markerstable" className="nav-link">
                    Усі маркери
                  </NavLink>
                </Nav.Item>
              </>
            )}
            {props.auth.isAuthenticated ? (
              <>
                <Nav.Item>
                  <NavLink exact to="/" className="nav-link">
                    Карта
                  </NavLink>
                </Nav.Item>
                <Nav.Item>
                  <NavLink to="/table" className="nav-link">
                    Мої маркери
                  </NavLink>
                </Nav.Item>
                <Button
                  variant="outline-secondary"
                  onClick={() => {
                    props.logoutUser();
                    props.clearCurrentProfile();
                  }}
                >
                  Вийти
                </Button>
              </>
            ) : (
              <>
                <Nav.Item>
                  <NavLink to="/login" className="nav-link">
                    Увійти
                  </NavLink>
                </Nav.Item>
                <Nav.Item>
                  <NavLink to="/register" className="nav-link">
                    Зареєструватись
                  </NavLink>
                </Nav.Item>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </NavbarWrapper>
  );
};

Navigation.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  clearCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

const NavbarWrapper = styled(Container)`
  height: 60px;
  background-color: #f8f9fa;
  z-index: 200;

  position: relative;

  @media (max-width: 767px) {
    .navbar-nav {
      position: absolute;
      background-color: #f8f9fa;
      width: 100%;
      padding: 2rem;
    }

    .nav-link {
      margin-left: 2rem;
      padding: 1rem 0;
    }

    .btn {
      width: 5rem;
    }
  }
`;

export default connect(mapStateToProps, { logoutUser, clearCurrentProfile })(
  Navigation
);
