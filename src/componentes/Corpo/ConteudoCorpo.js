import React from "react";
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Image from 'react-bootstrap/Image'

import decoracao from "../../assets/decoracao.jpg"
import acessoria from "../../assets/acessoria.jpg"

function ConteudoCorpo() {
  return (
    <Col  style={{}} lg={{ offset:2,span:6}} md={{ offset:2,span:6}} sm={{ offset:2,span:6}} xs={{ offset:2,span:6}}>
      <Container style={{backgroundColor:"Red"}}>
        <Row>
          <Image src={decoracao}  style={{ width: "100%", height:"100%"}} rounded />
        </Row>
        <Row>
          <Image src={acessoria}  style={{ width: "100%",height:"100%"}} rounded />
        </Row>
     </Container>
    </Col>
  );
}

export default ConteudoCorpo;
