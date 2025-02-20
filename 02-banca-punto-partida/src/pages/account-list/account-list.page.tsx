import { appRoutes } from "@/core/router";
import { generatePath, Link } from "react-router-dom";

export const AccountListPage: React.FC = () => {
  return (
    <div>
      <h1>Account List</h1>
      <br />
      <Link to={appRoutes.transfer}>Transferencia</Link>
      <br />
      <Link to={generatePath(appRoutes.movements, { id: 1 })}>
        Movimiento de cuenta 1
      </Link>
      <br />
      <Link to={generatePath(appRoutes.transfer, { id: 1 })}>
        Transferencia desde cuenta 1
      </Link>
    </div>
  );
};
