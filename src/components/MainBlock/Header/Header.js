import React, { useState } from 'react';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Predictions } from "../../Predictions/Predictions";

export const Header = ({ setIsLoggedIn }) => {
  
  const [isShowPredictions, setIsShowPredictions] = useState(false);

  const showPredictions = () => {
    setIsShowPredictions(true)
  }
  
  const logOut = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  }

  return (
  <>
    <div>
      <Navbar bg="light" expand="lg">
        <Container className="navbar-h">
          <Navbar.Brand href="#home">Good news for you</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <button onClick={showPredictions}>Predictions</button>
              <Nav.Link href="#home">Favorite</Nav.Link>
              <button onClick={logOut}>Log out</button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>

    <div>
      {isShowPredictions && <Predictions />}
    </div>
  </>
  );
};
