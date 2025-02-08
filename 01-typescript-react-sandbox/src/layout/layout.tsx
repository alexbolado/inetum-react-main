import React from "react";
import logo from "/logo_lemoncode.png";
import { MiContexto } from "../contexto";

interface Props {
  children: React.ReactNode;
}

export const Layout: React.FC<Props> = (props) => {
  const { children } = props;
  const { nombreUsuario } = React.useContext(MiContexto);
  return (
    <div className="layout-contenedor">
      <header className="layout-header">
        <h1>Lista de miembros de lemoncode</h1>
        <p>Bienvenido {nombreUsuario}</p>
      </header>
      <div className="container">{children}</div>
      <footer className="layout-footer">
        <img src={logo} alt="logo" />
      </footer>
    </div>
  );
};
