import React from "react";
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import NavDropdown from "react-bootstrap/NavDropdown"

function MenuCorpo() {
  return (
        <Col md={{span:2}} style={{backgroundColor:"#CDF2CB",margin:"1em",maxWidth:"10vw",borderRadius:10}}>
            <Navbar collapseOnSelect expand="lg">
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto flex-column">
                        <Col>
                        <Nav.Link href="#features">Features</Nav.Link>
                        </Col>
                        <Col>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                        </Col>
                        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Col>

  );
}

export default MenuCorpo;

