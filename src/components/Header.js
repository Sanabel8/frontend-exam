import React, { Component } from "react";
import { Navbar, Container, Nav } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';


export class Header extends Component {
  render() {
    return (
      <div>
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="/">Coctail App</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/favorite">Favorite</Nav.Link>
                
              </Nav>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default Header;
