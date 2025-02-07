import { Link } from "react-router-dom";
import { Miembro } from "./modelo";

interface Props {
  miembro: Miembro;
}

export const MiembroFila: React.FC<Props> = (props) => {
  const { miembro } = props;
  return (
    <>
      <img src={miembro.avatar_url} alt="avatar" />
      <span>{miembro.id}</span>
      <Link to={`/detalle/${miembro.id}`}>{miembro.login}</Link>
    </>
  );
};
