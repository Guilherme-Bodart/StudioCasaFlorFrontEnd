import React from "react";
import Row from "react-bootstrap/Row"
import Logo from "./Logo"
import Banner from "./Banner"
import MenuNav from "./MenuNav";

function Navegar() {

  return (
      <Row style={{height:"13vh", minHeight:"100px",backgroundColor:"#FEFDFE"}}>
        <Logo/>
        <Banner/>
        <MenuNav/>
      </Row>
  );
}

export default Navegar;
