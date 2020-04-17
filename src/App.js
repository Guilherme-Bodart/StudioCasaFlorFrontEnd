import React from "react";
import Container from "react-bootstrap/Container"
import Footer from "./componentes/Footer/Footer"
import Navegar from "./componentes/Navbar/Navegar"
import MainPage from "./paginas/mainPage/mainPage"

function App() {
  return (
    <Container fluid >
      <Navegar/>
      <MainPage/>
      <Footer/>
      
      
    </Container>
  );
}

export default App;
