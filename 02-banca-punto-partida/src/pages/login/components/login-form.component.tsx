import React from "react";
import { createEmptyCredentials, Credentials } from "../login.vm";

interface Props {
  onLogin: (credentials: Credentials) => void;
}

export const LoginFormComponent: React.FC<Props> = (props) => {
  const { onLogin } = props;
  const [credentials, setCredentials] = React.useState<Credentials>(
    createEmptyCredentials()
  );
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onLogin(credentials);
  };

  const handleFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Usuario</label>
          <input
            type="text"
            id="username"
            name="user"
            onChange={handleFieldChange}
          />
        </div>
        <div>
          <label htmlFor="password">Clave</label>
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleFieldChange}
          />
        </div>
        <button type="submit">Acceder</button>
      </form>
    </div>
  );
};
