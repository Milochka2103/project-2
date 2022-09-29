import React from 'react';
import { useHistory } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import './Header.css'
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logOut } from '../../../store/slices/auth';

export const Header = () => {
  const history = useHistory();

  const dispatch = useDispatch();

  const handleOut = () => {
    dispatch(logOut());

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
              <NavLink to="/login" onClick={handleOut}>
                Log out
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
