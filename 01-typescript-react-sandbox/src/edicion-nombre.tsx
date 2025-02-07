import React from "react";

interface Props {
  nombreInicial: string;
  onActualizarNombre: (nuevoNombre: string) => void;
}
export const EdicionNombre: React.FC<Props> = (props: Props) => {
  let { nombreInicial, onActualizarNombre } = props;
  const [nombreTemporal, setNombreTemporal] = React.useState(nombreInicial);

  return (
    <>
      <h1>Editar Nombre:</h1>
      <input
        value={nombreTemporal}
        onChange={(e) => setNombreTemporal(e.target.value)}
      />
      <button onClick={() => onActualizarNombre(nombreTemporal)}>
        Actualizar
      </button>
    </>
  );
};
