import React from "react";
import { MiembroFila } from "./miembro-fila";
import { Miembro } from "./modelo";
import { Layout } from "../../layout";
import { MiContexto } from "../../contexto";
import { useNavigate } from "react-router-dom";

interface Props {}

export const GridMiembros: React.FC<Props> = () => {
  const [miembros, setMiembros] = React.useState<Miembro[]>([]);
  const { nombreUsuario, setNombreUsuario } = React.useContext(MiContexto);
  const navigate = useNavigate();
  const handleNavegarADetalle = (id: number) => {
    navigate(`/detalle/${id}`);
  };
  React.useEffect(() => {
    fetch("https://api.github.com/orgs/lemoncode/members")
      .then((response) => response.json())
      .then((json) => setMiembros(json))
      .catch((error) => console.log(error));
  });
  return (
    <Layout>
      <label>Cambia el nombre</label>
      <input
        value={nombreUsuario}
        onChange={(e) => setNombreUsuario(e.target.value)}
      />
      <div className="user-list-container">
        <span className="header">Avatar</span>
        <span className="header">Id</span>
        <span className="header">Nombre</span>
        {miembros.map((miembro) => (
          <MiembroFila
            key={miembro.id}
            miembro={miembro}
            onNavegarDetalle={handleNavegarADetalle}
          />
        ))}
      </div>
    </Layout>
  );
};
