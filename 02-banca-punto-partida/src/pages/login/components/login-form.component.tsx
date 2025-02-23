import React from "react";
import {
  createEmptyCredentials,
  createEmptyCredentialsFormErrors,
  Credentials,
  CredentialsFormErrors,
} from "../login.vm";
import { validateForm } from "../login.validation";
import classes from "./login-form.component.module.css";

interface Props {
  onLogin: (credentials: Credentials) => void;
}

export const LoginFormComponent: React.FC<Props> = (props) => {
  const { onLogin } = props;
  const [errors, setErrors] = React.useState<CredentialsFormErrors>(
    createEmptyCredentialsFormErrors()
  );
  const [credentials, setCredentials] = React.useState<Credentials>(
    createEmptyCredentials()
  );
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationResult = validateForm(credentials);
    setErrors(validationResult.errors);
    if (validationResult.succeeded) {
      onLogin(credentials);
    }
  };

  const handleFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className={classes.form}>
        <div>
          <label htmlFor="username">Usuario</label>
          <input
            type="text"
            id="username"
            name="user"
            onChange={handleFieldChange}
            placeholder="Usuario"
            className={errors.user ? classes.inputError : ""}
          />
          {errors.user && <p className={classes.error}> {errors.user}</p>}
        </div>
        <div>
          <label htmlFor="password">Clave</label>
          <input
            type="password"
            placeholder="Contraseña"
            name="password"
            onChange={handleFieldChange}
            className={errors.password ? classes.inputError : ""}
          />
          {errors.password && (
            <p className={classes.error}>{errors.password}</p>
          )}
        </div>
        <button type="submit" className={classes.btnEnviar}>
          Acceder
        </button>
      </form>
    </div>
  );
};
