export interface Miembro {
  id: number;
  login: string;
  avatar_url: string;
  blog: string;
}

export const creaMiembroPorDefecto = (): Miembro => ({
  id: 0,
  login: "",
  avatar_url: "",
  blog: "",
});
