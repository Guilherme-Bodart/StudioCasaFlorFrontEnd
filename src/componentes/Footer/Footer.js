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
    <footer style={{backgroundColor:"#FEFCFD", height:"5vh",
            minHeight:"200px", bottom:"2vh",marginTop:"3vh",
            position:"relative"}}>
    
        <Tabs defaultActiveKey="profile"//BCE36E
          id="uncontrolled-tab-example" style={{backgroundColor:"#FEF9FC",borderTopRightRadius:10,borderTopLeftRadius:10}}>
            
          <Tab eventKey="sobre" style={{backgroundColor:"#FEFCFD"}} title="Sobre Nós">
           <Sobre/>
           </Tab>

          <Tab eventKey="equipe" style={{backgroundColor:"#FEFCFD"}} title="Equipe" >  
            <Equipe/>            
          </Tab>

          <Tab eventKey="contato" style={{backgroundColor:"#FEFCFD"}} title="Contato" >
          <Contato/>
          </Tab>

        </Tabs>
        <FontAwesomeIcon icon="google" />


      </footer>
    
  );
}

export default Footer;
