import React from "react";
import { crearCredencialVacia, Credencial } from "./modelo";
import { iniciarSesion } from "./login.api";
import { MiContexto } from "../../contexto";
import { useNavigate } from "react-router-dom";

export const Login: React.FC = () => {
  const { setNombreUsuario } = React.useContext(MiContexto);
  const navigate = useNavigate();
  const [perfilUsuario, setPerfilUsuario] = React.useState<Credencial>(
    crearCredencialVacia()
  );

  const handleAutenticar = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    iniciarSesion(perfilUsuario).then((esValido) => {
      if (esValido) {
        setNombreUsuario(perfilUsuario.usuario);
        navigate("/miembros");
      } else {
        alert("Usuario o contraseña incorrectos");
      }
    });
  };

  return (
    <div className="contenedor-login">
      <h2>Inicio de sesión</h2>
      <form className="contenedor-formulario" onSubmit={handleAutenticar}>
        <label htmlFor="usuario">Usuario</label>
        <input
          id="usuario"
          type="text"
          value={perfilUsuario.usuario}
          onChange={(e) =>
            setPerfilUsuario({ ...perfilUsuario, usuario: e.target.value })
          }
        />

        <label htmlFor="password">Contraseña</label>
        <input
          id="password"
          value={perfilUsuario.password}
          type="password"
          autoComplete="off"
          onChange={(e) =>
            setPerfilUsuario({ ...perfilUsuario, password: e.target.value })
          }
        />

        <button type="submit">Iniciar sesión</button>
      </form>
    </div>
  );
};
