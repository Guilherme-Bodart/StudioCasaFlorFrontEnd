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
          id="uncontrolled-tab-example" style={{backgroundColor:"#CDF2CB"}}>
          
          <Tab eventKey="inicio" style={{backgroundColor:"#F2E4EC"}} title="Início" >
          <Inicio/>       
          </Tab>

          <Tab eventKey="sobre" style={{backgroundColor:"#F2E4EC"}} title="Sobre Nós">
           <Sobre/>
           </Tab>

          <Tab eventKey="equipe" style={{backgroundColor:"#F2E4EC",}} title="Equipe" >  
            <Equipe/>            
          </Tab>

          <Tab eventKey="contato" style={{backgroundColor:"#F2E4EC"}} title="Contato" >
          <Contato/>
          </Tab>

        </Tabs>
        <FontAwesomeIcon icon="google" />


      </footer>
    
  );
}

export default Footer;
