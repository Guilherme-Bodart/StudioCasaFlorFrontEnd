import React from "react";
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import { LocalFloristOutlined, ContactMailOutlined, HomeOutlined } from '@material-ui/icons'
import AdSense from 'react-adsense';

function MenuCorpo() {
    return (
            <Col  lg={{ offset:1,span: 2}} md={{ offset:1,span: 2}} sm={{ offset:1,span: 2}} xs={{ offset:1,span: 2}} style={{borderRadius:10}}>
                <Navbar collapseOnSelect expand="lg" style={{}}>
                
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav  className="mr-auto flex-column" style={{width:"10em",borderBottom:"solid 0.5px",borderColor:"#aaa"}}>
                        <Navbar.Brand style={{color:"#aaa"}}>Atalhos</Navbar.Brand>
                            <Row >
                                <Nav.Link href="#decoracao" style={{fontSize:"18px"}}> <HomeOutlined style={{fontSize:"30px",marginBottom:"0.2em",marginRight:"0.1em"}}/> Decoração </Nav.Link>
                            </Row>
                            <Row>
                                <Nav.Link href="#acessoria" style={{fontSize:"18px"}}> <ContactMailOutlined style={{fontSize:"30px",marginBottom:"0.2em",marginRight:"0.1em"}}/> Acessoria</Nav.Link>
                            </Row>
                            <Row>
                                <Nav.Link href="#designfloral" style={{fontSize:"18px"}}> <LocalFloristOutlined style={{fontSize:"30px",marginBottom:"0.2em",marginRight:"0.1em"}}/> Design Floral</Nav.Link>
                            </Row>
                            <Row>
                                <AdSense.Google
                                    client='ca-pub-7292810486004926'
                                    slot='7806394673'
                                    style={{ width: 500, height: 300, float: 'left' }}
                                    format=''
                                />
                            </Row>
                            
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Col>

  );
}

export default MenuCorpo;

