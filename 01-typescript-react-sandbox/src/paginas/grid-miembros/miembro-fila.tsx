import { Miembro } from "./modelo";

interface Props {
  miembro: Miembro;
  onNavegarDetalle: (id: number) => void;
}

export const MiembroFila: React.FC<Props> = (props) => {
  const { miembro, onNavegarDetalle } = props;
  return (
    <>
      <img src={miembro.avatar_url} alt="avatar" />
      <span>{miembro.id}</span>
      <button onClick={() => onNavegarDetalle(miembro.id)}>
        {miembro.login}
      </button>
      {/* <Link to={`/detalle/${miembro.id}`}>{miembro.login}</Link> */}
    </>
  );
};
