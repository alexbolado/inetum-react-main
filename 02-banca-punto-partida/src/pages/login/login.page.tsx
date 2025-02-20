import { createEmptyCredentialsFormErrors, Credentials } from "./login.vm";
import { LoginFormComponent } from "./components";
import { mapCredentialsFromVmToApi } from "./login.mapper";
import { isValidLogin } from "./api";
import { useNavigate } from "react-router-dom";
import { appRoutes } from "@/core/router";
import React from "react";

export const LoginPage = () => {
  const  navigate =  useNavigate();
  const [errors, setErrors] = React.useState<Credentials>(createEmptyCredentialsFormErrors());
  const handleLogin = async (credentials: Credentials) => {
    const apiCredentials = mapCredentialsFromVmToApi(credentials);
    const isValid = await isValidLogin(apiCredentials);
      if (isValid) {
        navigate(appRoutes.accountList);
      } else {
        alert("Login failed");
      }
    ;
  };

  return (
    <div>
      <LoginFormComponent onLogin={handleLogin} />
    </div>
  );
};
