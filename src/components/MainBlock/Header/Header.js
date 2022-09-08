import React from 'react';
import { useHistory } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {LinkContainer} from "react-router-bootstrap";
import './Header.css'
import { NavLink } from 'react-router-dom';

export const Header = ({ setIsLoggedIn }) => {
  const history = useHistory()

  const logOut = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
    history.push('/login');
  }

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container className="navbar-h">
          <Navbar.Brand href="/predictions">Good news for you</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav NavBtn" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink to="/predictions">Predictions</NavLink>
              <NavLink to="/favorite">Favorite</NavLink>
              <NavLink to="/login" onClick={logOut}>
                Log out
              </NavLink>

            
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
