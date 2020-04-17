import React from "react";
import Button from "react-bootstrap/Button"
import ButtonGroup from "react-bootstrap/ButtonGroup"

function Inicio() {
  return (
        <ButtonGroup aria-label="Basic example" style={{marginTop:"3vh"}}>
            <Button variant="outline-secondary">DECORAÇÃO</Button>
            <Button variant="outline-secondary">ASSESSORIA</Button>
            <Button variant="outline-secondary">DESIGN FLORAL</Button>
        </ButtonGroup>         
      

    
  );
}

export default Inicio;
