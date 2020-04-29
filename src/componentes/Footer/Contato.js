import React from "react";
import ListGroup from 'react-bootstrap/ListGroup'

function Contato() {
  return (
        <ListGroup variant="flush" style={{}}>
            <ListGroup.Item style={{backgroundColor:"#FEFCFD",color:"dark"}}>E-mail: contato@studiocasaflor.com.br</ListGroup.Item>
            <ListGroup.Item style={{backgroundColor:"#FEFCFD",color:"dark"}}>Telefone: (27) 99288-2089</ListGroup.Item>
            <ListGroup.Item style={{backgroundColor:"#FEFCFD",color:"dark"}}>Funcionamento: 09:00 - 17:00 horas</ListGroup.Item>
            <ListGroup.Item style={{backgroundColor:"#FEFCFD",color:"dark"}}>Normalmente responde em um dia</ListGroup.Item>
        </ListGroup>
  );
}

export default Contato;
