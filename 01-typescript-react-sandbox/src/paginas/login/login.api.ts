import { Credencial } from "./modelo";

export const iniciarSesion = async (
  credencial: Credencial
): Promise<boolean> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (credencial.usuario === "admin" && credencial.password === "test") {
        resolve(true);
      } else {
        resolve(false);
      }
    });
  });
};
