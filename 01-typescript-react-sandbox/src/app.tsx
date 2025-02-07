import { Rutas } from "./rutas";

/* interface Usuario {
  nombre: string;
  apellidos: string;º
} */

export const App = () => {
  /* const [nombre, setNombre] = React.useState("vacio");

  const handleActualizarNombre = (nuevoNombre: string) => {
    if (nuevoNombre === "Joshua") {
      alert("Tú eres bobo");
    } else {
      setNombre(nuevoNombre);
    }
  }; */

  /* const [usuario, setUsuario] = React.useState<Usuario>({
    nombre: "Juan",
    apellidos: "Perez",
  });

  const handleFieldChange =
    (fieldId: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setUsuario({
        ...usuario,
        [fieldId]: e.target.value,
      });
    }; */

  return (
    <>
      {/* <h1>Nombre: {usuario.nombre}</h1>
      <input value={usuario.nombre} onChange={handleFieldChange("nombre")} />
      <h1>Apellidos: {usuario.apellidos}</h1>
      <input
        value={usuario.apellidos}
        onChange={handleFieldChange("apellidos")}
      /> */}
      {/*  <Saludo nombre={nombre}></Saludo>
      <EdicionNombre
        nombreInicial={nombre}
        onActualizarNombre={handleActualizarNombre}
      /> */}
      <Rutas />
    </>
  );
};
