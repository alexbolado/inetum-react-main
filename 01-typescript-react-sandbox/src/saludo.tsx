import React from "react";

interface Props {
  nombre: string;
}

export const Saludo: React.FC<Props> = (props) => {
  return <h1>Hola {props.nombre}</h1>;
};
