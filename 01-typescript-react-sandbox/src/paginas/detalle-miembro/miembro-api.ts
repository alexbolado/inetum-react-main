import { Miembro } from "./modelo";

export const getMiembroId = (id: string): Promise<Miembro> => {
  return fetch(`https://api.github.com/user/${id}`).then((res) => res.json());
};
