import React, {useState} from "react";
import Col from "react-bootstrap/Col"
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'

import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function MenuNav() {
  const [showButtonS, setShowButtonS] = useState(false)
  const botaoPesquisa = <Button variant="outline-info"
                          onClick={ () => {setShowButtonS(!showButtonS)}
                          }><FontAwesomeIcon icon={faSearch} />
                        </Button>

  const campoPesquisa = showButtonS ? botaoPesquisa
                                    : <InputGroup style={{width:"15.5em"}}>
                                          <FormControl
                                            placeholder="Search"/>
                                          <InputGroup.Append>
                                            {botaoPesquisa}
                                          </InputGroup.Append>
                                      </InputGroup>

  return (
    <Col  lg={{span: 3, order:2}} md={{ span: 4, order:2}} sm={{span: 9, order:1}} xs={{ span: 9, order:1}} style={{marginTop:"1vh"}}>
        <Navbar variant="light" bg="outline-light" style={{fontSize:"1.3em" }}>
        <Nav className="ml-auto">
            <Nav.Link  href="#inicio" style={{marginRight:"0.4em"}}>Início</Nav.Link>
            <Nav.Link href="#sobre" style={{marginRight:"0.4em"}}>Sobre</Nav.Link>
            <Nav.Link href="#contato" style={{marginRight:"0.4em"}}>Contato</Nav.Link>
        </Nav>
        </Navbar>
        <Navbar variant="light" bg="outline-light" style={{ }}>
        <Form inline className="ml-auto">
            
            {campoPesquisa}
            
        </Form>
        
        </Navbar>
        
    </Col>
  );
}

export default MenuNav;
