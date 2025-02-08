import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { GridMiembros } from "./paginas/grid-miembros";
import { MiembroDetalle } from "./paginas/detalle-miembro";
import { Login } from "./paginas/login/login";

export const Rutas: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/miembros" element={<GridMiembros />} />
        <Route path="/detalle/:id" element={<MiembroDetalle />} />
      </Routes>
    </Router>
  );
};
