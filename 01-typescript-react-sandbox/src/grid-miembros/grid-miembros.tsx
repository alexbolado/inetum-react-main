import React from "react";
import { MiembroFila } from "./miembro-fila";
import { Miembro } from "./modelo";

interface Props {}

export const GridMiembros: React.FC<Props> = () => {
  const [miembros, setMiembros] = React.useState<Miembro[]>([]);
  React.useEffect(() => {
    fetch("https://api.github.com/orgs/lemoncode/members")
      .then((response) => response.json())
      .then((json) => setMiembros(json))
      .catch((error) => console.log(error));
  });
  return (
    <div className="user-list-container">
      <span className="header">Avatar</span>
      <span className="header">Id</span>
      <span className="header">Nombre</span>
      {miembros.map((miembro) => (
        <MiembroFila key={miembro.id} miembro={miembro} />
      ))}
    </div>
  );
};
