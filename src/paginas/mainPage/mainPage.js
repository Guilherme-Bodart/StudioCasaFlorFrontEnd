import React from "react";
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"

function MainPage() {
  return (
      <Row style={{backgroundColor:"#fff",minHeight:"55vh"}}>
        <Col md={{span:2}} style={{backgroundColor:"#fff"}}>
          Um texto 
        </Col>

        <Col md={{offset:1}} style={{backgroundColor:"#fff"}}>
        Teste2
        </Col>

        <Col md={{span:2,offset:1}} style={{backgroundColor:"#fff"}}>
        Teste3
        </Col>

      </Row>
  );
}

export default MainPage;
