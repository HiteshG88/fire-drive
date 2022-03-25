import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NavbarComponent() {
  return (
    <Navbar bg='light' expand='bg'>
      <Navbar.Brand as={Link} to='/'>
        {/* eslint-disable-next-line */}
        <h4>🔥 Fire Drive</h4>
      </Navbar.Brand>
      <Nav>
        <Nav.Link as={Link} to='/user'>
          <Button variant='outline-success' size='sm'>
            Profile
          </Button>{" "}
        </Nav.Link>
      </Nav>
    </Navbar>
  );
}
