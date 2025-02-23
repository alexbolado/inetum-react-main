import { Credentials } from "./login.vm";

import { mapCredentialsFromVmToApi } from "./login.mapper";
import { isValidLogin } from "./api";
import { useNavigate } from "react-router-dom";
import { appRoutes } from "@/core/router";
import { LoginFormComponent } from "./components";
import classes from "./login.page.module.css";

export const LoginPage = () => {
  const navigate = useNavigate();

  const doLogin = async (credentials: Credentials) => {
    const apiCredentials = mapCredentialsFromVmToApi(credentials);
    const isValid = await isValidLogin(apiCredentials);
    if (isValid) {
      navigate(appRoutes.accountList);
    } else {
      alert("Login failed");
    }
  };

  const handleLogin = async (credentials: Credentials) => {
    doLogin(credentials);
  };

  return (
    <div>
      <header className={classes.header}>
        <img src="assets/logo_header.svg" alt="logo" className={classes.logo} />
      </header>
      <div className={classes.bgImg}></div>
      <div className={classes.box}>
        <h1>Acceso</h1>
        <LoginFormComponent onLogin={handleLogin} />
        <h4 className={classes.inputFooter}>
          Está Usted en un <strong>sitio seguro</strong>
        </h4>
      </div>
    </div>
  );
};
