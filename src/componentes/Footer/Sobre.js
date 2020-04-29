import React from "react";
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"
import Image from 'react-bootstrap/Image'
import logoImage from "../../assets/logo.jpg"

function Sobre() {
  return (
      <Row>
      
        <Col  lg={{ offset:1,span: 3}} md={{ offset:1,span: 3}} sm={{ offset:1,span: 3}} xs={{ offset:1,span: 3}}>
          <p  style={{marginTop:'1em',textIndent:"2vh",textAlign:"justify"}}>
            O Studio Casa Flor trabalha com decoração de eventos e assessoria.
            Cria projetos exclusivos e acompanha de perto todas as suas etapas, assim cada um nasce diferente e único.
            Acreditamos na possibilidade de realizar sonhos com o máximo de respeito e qualidade.
          </p>
        
        </Col>
        <Col  lg={{ offset:1,span: 1}} md={{ offset:1,span: 1}} sm={{ span: 1}} xs={{ span: 1}}>
          <Image src={logoImage}  style={{ width: "20vw", height:"20vw",marginTop:"2em",maxHeight:"170px",maxWidth:"170px"}} roundedCircle />
        </Col>
        <Col  lg={{ offset:1,span: 3}} md={{ offset:2,span: 3}} sm={{ offset:2,span: 3}} xs={{ offset:2,span: 3}}>
          <p style={{textIndent:"2vh",textAlign:"justify",marginTop:'1em',fontSize:"1.37em"}}>Local</p>
          <p  style={{textIndent:"2vh",textAlign:"justify"}}>
              Estamos Localizados em Vitória, e atendemos em todo o estado aqueles que desejam uma festa inesquecível.
          </p>
        </Col>
      </Row>
         
    
  );
}

export default Sobre;
