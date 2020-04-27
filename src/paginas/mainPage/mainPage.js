import React from "react";
import Navegar from "../../componentes/Navbar/Navegar"
import Corpo from "../../componentes/Corpo/Corpo"
import Footer from "../../componentes/Footer/Footer"
import Container from "react-bootstrap/Container";

function MainPage() {
  return (
    <Container fluid>
      <Navegar/>
      <Corpo/>
      <Footer/>
    </Container>
  );
}

export default MainPage;
