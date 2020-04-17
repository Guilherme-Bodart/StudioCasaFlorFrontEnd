import React from "react";
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Image from 'react-bootstrap/Image'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'

import Logo from "../../assets/logo.jpg"

function Navegar() {
  return (
      <Row style={{backgroundColor:"#fff", height:"15vh", minHeight:"125px"}}>
        <Col md={{span:1}} style={{backgroundColor:"#12ab12", alignItems:'center'}}>
            <Image src={Logo}  style={{width: "110px", height:"110px",marginTop:'1.2vh',}} roundedCircle />
        </Col>

        <Col md={{span:6,offset:1}} style={{backgroundColor:"#fff"}}>
            <p style={{fontSize:48,textAlign:'center'}}>Studio Casa Flor</p>
        
        </Col>

        <Col md={{span:4}} style={{backgroundColor:"#fff"}}>
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-info">Search</Button>
            </Form>
          </Navbar>
        </Col>

      </Row>
  );
}

export default Navegar;
