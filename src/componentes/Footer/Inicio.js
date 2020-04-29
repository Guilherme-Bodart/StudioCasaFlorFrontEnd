//Nao esta sendo utilizado

import React from "react";
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"

function Inicio() {
  return (    
       <Navbar style={{fontSize:"1.3em"}}>
       <Nav className="mr-auto">
         <Nav.Link style={{borderRadius:50, borderBottom:"double",marginRight:"1em", backgroundColor:"#FAE9F4" }} href="#decoracao">Decoração</Nav.Link>
         <Nav.Link style={{borderRadius:50, borderBottom:"double",marginRight:"1em", backgroundColor:"#FAE9F4" }} href="#acessoria">Acessoria</Nav.Link>
         <Nav.Link style={{borderRadius:50, borderBottom:"double",marginRight:"1em", backgroundColor:"#FAE9F4"}} href="#designfloral">Design Floral</Nav.Link>
       </Nav>
       </Navbar>

    
  );
}

export default Inicio;
