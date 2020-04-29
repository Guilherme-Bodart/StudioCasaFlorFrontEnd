import React from "react";
import Row from "react-bootstrap/Row"
import MenuCorpo from "./MenuCorpo"
import ConteudoCorpo from "./ConteudoCorpo"
import Propaganda from "./Propaganda"

function Corpo() {
  return (
      <Row style={{backgroundColor:"#FEFCFD",minHeight:"55vh",boxShadow:"-3px -1.5px 2px 1px rgba(0, 0, 0, 0.05)"}}>
        <MenuCorpo />
        <ConteudoCorpo/>
        <Propaganda/>

      </Row>
  );
}

export default Corpo;
