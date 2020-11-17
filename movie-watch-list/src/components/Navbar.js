import React from "react";
import BsNavbar from "react-bootstrap/Navbar";
import { Nav, NavDropdown } from "react-bootstrap";

function Navbar() {
  return (
    <BsNavbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <BsNavbar.Brand href="#home">React-Bootstrap</BsNavbar.Brand>
      <BsNavbar.Toggle aria-controls="responsive-navbar-nav" />
      <BsNavbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
          <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <Nav.Link href="#deets">More deets</Nav.Link>
          <Nav.Link eventKey={2} href="#memes">
            Dank memes
          </Nav.Link>
        </Nav>
      </BsNavbar.Collapse>
    </BsNavbar>
  );
}

export default Navbar;
