import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Tab from "react-bootstrap/Tab"
import Tabs from "react-bootstrap/Tabs"

import Equipe from './Equipe'
import Sobre from './Sobre'
import Inicio from './Inicio'
import Contato from './Contato'

function Footer() {
  return (
    <footer style={{backgroundColor:"#fff", height:"10vh",
            minHeight:"200px", bottom:"2vh",marginTop:"2vh",
            position:"relative"}}>
    
        <Tabs defaultActiveKey="profile"
          id="uncontrolled-tab-example" style={{backgroundColor:"#fff"}}>
          
          <Tab eventKey="inicio" title="Início" >
          <Inicio/>       
          </Tab>

          <Tab eventKey="sobre" title="Sobre Nós">
           <Sobre/>
           </Tab>

          <Tab eventKey="equipe" title="Equipe" >  
            <Equipe/>            
          </Tab>

          <Tab eventKey="contato" title="Contato" >
          <Contato/>
          </Tab>

        </Tabs>
        <FontAwesomeIcon icon="google" />


      </footer>
    
  );
}

export default Footer;
