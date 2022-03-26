import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NavbarComponent() {
  return (
    <Navbar bg='light' expand='bg'>
      <Navbar.Brand as={Link} to='/'>
        {/* eslint-disable-next-line */}
        <h3>🔥 Fire Drive</h3>
      </Navbar.Brand>
      <Nav>
        <Nav.Link as={Link} to='/user'>
          <Button variant='outline-success'>Profile</Button>{" "}
        </Nav.Link>
      </Nav>
    </Navbar>
  );
}
