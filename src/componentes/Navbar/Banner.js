import React from "react";
import Col from "react-bootstrap/Col"

function Banner() {
  
    return (
        <Col  classname="d-flex justify-content-center" style={{}} lg={{span: 7,order:1}} md={{ span: 6,order:1}} sm={{span: 0,order:2}} xs={{ span: 0,order:2}}>
            <p  style={{fontSize:"2.6em",textAlign:'center',marginTop:"0.9em",marginLeft:"3.6vw"}}> Studio Casa Flor</p>
        </Col>
  );
}

export default Banner;
