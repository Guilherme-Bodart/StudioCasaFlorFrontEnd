import React from "react";
import ListGroup from 'react-bootstrap/ListGroup'

function Contato() {
  return (
        <ListGroup variant="flush">
            <ListGroup.Item style={{backgroundColor:"#F2E4EC"}}>E-mail: contato@studiocasaflor.com.br</ListGroup.Item>
            <ListGroup.Item style={{backgroundColor:"#F2E4EC"}}>Telefone: (27) 99288-2089</ListGroup.Item>
            <ListGroup.Item style={{backgroundColor:"#F2E4EC"}}>Funcionamento: 09:00 - 17:00 horas</ListGroup.Item>
            <ListGroup.Item style={{backgroundColor:"#F2E4EC"}}>Normalmente responde em um dia</ListGroup.Item>
        </ListGroup>
  );
}

export default Contato;
