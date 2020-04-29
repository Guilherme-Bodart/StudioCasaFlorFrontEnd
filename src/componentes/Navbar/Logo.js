import React from "react";
import Col from "react-bootstrap/Col"
import Image from 'react-bootstrap/Image'
import logoImage from "../../assets/logo.jpg"

function Logo() {

  return (
    <Col lg={{span: 2,order:0}} md={{ span: 2,order:0}} sm={{span: 3,order:0}} xs={{ span: 3,order:0}}  style={{ }}>
        <Image src={logoImage}  style={{ width: "90px", height:"90px",marginLeft:"1em",marginTop:"0.5em"}} roundedCircle />
    </Col>
  );
}

export default Logo;
