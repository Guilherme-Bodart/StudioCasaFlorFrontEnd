import React from "react";
import ListGroup from 'react-bootstrap/ListGroup'

function Contato() {
  return (
        <ListGroup variant="flush">
            <ListGroup.Item>E-mail: contato@studiocasaflor.com.br</ListGroup.Item>
            <ListGroup.Item>Telefone: (27) 99288-2089</ListGroup.Item>
            <ListGroup.Item>Funcionamento: 09:00 - 17:00 horas</ListGroup.Item>
            <ListGroup.Item>Normalmente responde em um dia</ListGroup.Item>
        </ListGroup>
  );
}

export default Contato;
