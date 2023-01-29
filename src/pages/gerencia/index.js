import Header from "../../components/Header";
import React from "react";
import { useState, useEffect } from "react";
import Bloqueio from "./Bloqueio";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import GerenciaCadastro from "./GerenciaCadastro";
import GerenciaManipulacao from "./GerenciaManipulacao";
import GerenciaTabelaFalta from "./GerenciaTabelaFalta";
import GerenciaFilter from "./GerenciaFilter";

export default function GerenciaScreen() {
  const [showPage, setShowPage] = useState(false);
  const login = () => {
    setShowPage(true);
  };
  return (
    <>
      <Header />
      {showPage ? (
        <Tabs
          defaultActiveKey="profile"
          id="justify-tab-example"
          className="mb-3 mt-3"
          justify
        >
          <Tab eventKey="Faltas" title="Faltas">
            <GerenciaTabelaFalta />
          </Tab>
          <Tab eventKey="Manipulação" title="Manipulação">
            <GerenciaManipulacao />
          </Tab>
          <Tab eventKey="Cadastro" title="Cadastro Vendedor">
            <GerenciaCadastro />
          </Tab>
        </Tabs>
      ) : (
        <Bloqueio login={login} />
      )}
    </>
  );
}
