import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import React from "react";

export default function Header() {
  return (
    <>
      <header>
        <Navbar bg="primary" variant="dark" className="justify-content-end">
          <Container>
            <Navbar.Brand href="faltas">Drogamaxi</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="faltas">Faltas/Encomendas</Nav.Link>
              <Nav.Link href="manipulacao">Manipulação</Nav.Link>
              <Nav.Link href="gerencia">Gerência</Nav.Link>
            </Nav>
          </Container>
        </Navbar>{" "}
      </header>
    </>
  );
}
