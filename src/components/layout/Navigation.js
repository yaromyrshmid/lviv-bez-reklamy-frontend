import React from "react";
import { Link, NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import styled from "styled-components";
import { Navbar, Nav } from "react-bootstrap";

import { Button, NavItem } from "../ui";

import { logoutUser } from "../../redux/actions/authActions";
import { clearCurrentProfile } from "../../redux/actions/profileActions";

const Navigation = props => {
  return (
    <NavbarWrapper>
      <Navbar expand="lg" collapseOnSelect={true}>
        <Navbar.Brand>
          <Link to="/">Львів без реклами</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="ml-auto">
            {props.auth.isAuthenticated && props.auth.user.role === "admin" && (
              <>
                <NavItem>
                  <NavLink to="/admin/markers">Усі маркери</NavLink>
                </NavItem>
              </>
            )}
            {props.auth.isAuthenticated ? (
              <>
                <NavItem>
                  <NavLink exact to="/">
                    Карта
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/mymarkers">Мої маркери</NavLink>
                </NavItem>
                <Button
                  empty
                  onClick={() => {
                    props.logoutUser();
                    props.clearCurrentProfile();
                  }}
                  margin={"0 1rem"}
                >
                  <span>Вихід</span>
                </Button>
              </>
            ) : (
              <>
                <NavItem>
                  <NavLink as={Button} to="/login">
                    Вхід
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/register">Реєстрація</NavLink>
                </NavItem>
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

const NavbarWrapper = styled.div`
  width: 100%;
  background-color: var(--mainWhite);
  font-family: var(--fontHead);
  z-index: 200;
  position: relative;

  .navbar {
    height: 70px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    transition: var(--mainTransition);
  }

  @media (max-width: 767px) {
    .navbar-nav {
      position: absolute;
      background-color: var(--mainWhite);
      width: 90%;
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

  @media (min-width: 992px) {
    padding: 0 2vw;
  }

  @media (min-width: 1200px) {
    padding: 0 5vw;
  }
`;

export default connect(mapStateToProps, { logoutUser, clearCurrentProfile })(
  Navigation
);
