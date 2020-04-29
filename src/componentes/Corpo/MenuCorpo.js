import React from "react";
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import { LocalFloristOutlined, ContactMailOutlined, HomeOutlined } from '@material-ui/icons'

function MenuCorpo() {
    return (
            <Col lg={{ span: 1}} md={{ span: 1}} sm={{ span: 1}} xs={{ span: 1}} style={{borderRadius:10}}>
                <Navbar collapseOnSelect expand="lg" style={{width:"13vw"}}>
                
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav  className="mr-auto flex-column" style={{width:"10vw",borderBottom:"solid 0.5px",borderColor:"#aaa"}}>
                        <Navbar.Brand style={{color:"#aaa",fontSize:"1.5em"}}>Atalhos</Navbar.Brand>
                            <Row >
                                <Nav.Link href="#decoracao" style={{fontSize:"18px"}}> <HomeOutlined style={{fontSize:"1.5em",marginBottom:"0.2em",marginRight:"0.1em"}}/> 
                                                                                        Decoração </Nav.Link>
                            </Row>
                            <Row>
                                <Nav.Link href="#acessoria" style={{fontSize:"18px"}}> <ContactMailOutlined style={{fontSize:"1.5em",marginBottom:"0.2em",marginRight:"0.1em"}}/> 
                                                                                        Acessoria</Nav.Link>
                            </Row>
                            <Row>
                                <Nav.Link href="#designfloral" style={{fontSize:"18px"}}> <LocalFloristOutlined style={{fontSize:"1.5em",marginBottom:"0.2em",marginRight:"0.1em"}}/> 
                                                                                        Design Floral</Nav.Link>
                            </Row>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Col>

  );
}

export default MenuCorpo;

