import React from "react";
import Row from "react-bootstrap/Row"
import Logo from "./Logo"
import Banner from "./Banner"
import MenuNav from "./MenuNav";

function Navegar() {

  return (
      <Row style={{height:"15vh", minHeight:"125px"}}>
        <Logo/>
        <Banner/>
        <MenuNav/>
      </Row>
  );
}

export default Navegar;
