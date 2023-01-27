import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FaltasScreen from "./pages/faltas";
import ManipulacaoScreen from "./pages/manipulacao";
import GerenciaScreen from "./pages/gerencia";

const Rotas = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<FaltasScreen />} />
      <Route path="/faltas" element={<FaltasScreen />} />
      <Route path="/manipulacao" element={<ManipulacaoScreen />} />
      <Route path="/gerencia" element={<GerenciaScreen />} />
    </Routes>
  </BrowserRouter>
);

export default Rotas;
