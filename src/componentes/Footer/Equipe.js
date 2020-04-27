import React, {useState} from "react";
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Image from "react-bootstrap/Image"
import Fade from 'react-bootstrap/Fade'

import tainah from "../../assets/tainah.jpg"
import camila from "../../assets/camila.jpg"

function Equipe() {
  const [showC, setShowC] = useState(false)
  const [showT, setShowT] = useState(false)
  const [boxShadow, setBoxShadow] = useState("5px 5px 5px #9E9E9E")

  const textoC = showC ? "Formada em desing de interiores e com experiência no ramo de casamentos, alio as novidades e tendências do mercado as demandas dos nossos clientes, contribuiindo para que cada evento seja exclusivo."
                      : ""
  const textoT = showT ? "Com formação em arquitetura e urbanismo com mestrado na área, carrego o conhecimento da profissão para criarmos projetos inovadores e que transmitam a identidade e desejos de nossos clientes."
                :  ""
  
  const smC = showC ? {span:4,order:3} : {span:0,order:4}
  const smT = showT ? {span:4,order:3} : {span:0,order:4}
 
  return (

    <Row lg={11}>
      <Col lg={{ span: 3,order:1}} md={{ span: 4,order:1}} sm={smC} xs={smC} >
        <Fade in={showC} >
          <p  style={{marginTop:'3vh',textIndent:"2vw",textAlign:"justify",marginLeft:"2vw"}}>{textoC}</p>
        </Fade>
      </Col>

      <Col  lg={{span: 2,order:0}} md={{ span: 2,order:0}} sm={{span: 3,order:1}} xs={{ span: 4,order:1}}>
        <Image src={camila} roundedCircle
               onClick={ () => {setShowC(!showC) 
                                setShowT(false)}
                      }
                onMouseOver={()=> {setBoxShadow("0px 0px 0px #9E9E9E") 
                                   setShowC(true)
                                   setShowT(false)
                                }
                            }
                onMouseLeave={()=> {setBoxShadow("5px 5px 5px #9E9E9E")}}
        style={{width: "110px", height:"110px", marginLeft:"2vw",boxShadow:boxShadow,
                 marginTop:"2vh",border:"solid",borderWidth:"0.10em",borderColor:"#E8E54A"}} />
        <p style={{fontSize:"1.2em", marginLeft:"2vw",textAlign:'left'}}>Camila Castro</p>
      </Col>

      <Col  lg={{ offset:1,span: 2,order:2}} md={{ span: 2,order:2}} sm={{span: 3,order:2}} xs={{ span: 4,order:2}} >
        <Image src={tainah} roundedCircle
               onClick={ () => {setShowT(!showT); 
                          setShowC(false)}
                }
                onMouseOver={()=> {setBoxShadow("0px 0px 0px #9E9E9E") 
                                   setShowT(true)
                                   setShowC(false)
                                  }
                            }
                onMouseLeave={()=> {setBoxShadow("5px 5px 5px #9E9E9E")}}
        style={{width: "110px", height:"110px", marginLeft:"1vw",boxShadow:boxShadow, 
        marginTop:"2vh",border:"solid",borderWidth:"0.10em",borderColor:"#F2ABCB"}} />
        <p style={{fontSize:"1.2em"}}>Tainah Cypriano</p>
      </Col>

      <Col  lg={{ offset:0,span: 3,order:3}} md={{  span: 4,order:3}} sm={smT} xs={smT}>
        <Fade in={showT} >
          <p style={{marginTop:'3vh',textIndent:"2vw",textAlign:"justify",marginLeft:"1.5vw",marginRight:"1.5vw"}}>{textoT}</p>
        </Fade>
      </Col>
    </Row>
      
  );
}

export default Equipe;
