import React from "react";
import { useParams } from "react-router-dom";
import { creaMiembroPorDefecto, Miembro } from "./modelo";
import { getMiembroId } from "./miembro-api";
import { Layout } from "../layout";

export const MiembroDetalle: React.FC = () => {
  const { id } = useParams();
  const [miembro, setMiembro] = React.useState<Miembro>(
    creaMiembroPorDefecto()
  );

  React.useEffect(() => {
    if (id) {
      getMiembroId(id).then(setMiembro);
    }
  }, []);
  return (
    <Layout>
      <div className="detalle-contenedor">
        <h2>Hola desde pagina detalle</h2>
        <h2>Detalle miembro: </h2>
        <img src={miembro.avatar_url} alt="avatar" />
        <p>{miembro.login}</p>
        <p>{miembro.blog}</p>
      </div>
    </Layout>
  );
};
