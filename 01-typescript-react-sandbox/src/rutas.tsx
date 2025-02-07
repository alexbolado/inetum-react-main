import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { GridMiembros } from "./grid-miembros";
import { MiembroDetalle } from "./detalle-miembro";

export const Rutas: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<GridMiembros />} />
        <Route path="/detalle/:id" element={<MiembroDetalle />} />
      </Routes>
    </Router>
  );
};
