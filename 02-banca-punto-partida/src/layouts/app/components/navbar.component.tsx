import { appRoutes, routesPrefixes } from "@/core/router";
import { useLocation } from "react-router-dom";
import classes from "./navbar.component.module.css";
import { LinkItemComponent } from "./link-item.component";

export const NavbarComponent: React.FC = () => {
  const { pathname } = useLocation();

  return (
    <nav className={classes.navbar}>
      <ul className={classes.list}>
        <LinkItemComponent
          label="Mis Cuentas"
          to={appRoutes.accountList}
          routePrefix={routesPrefixes.accountList}
          pathname={pathname}
        />
        <LinkItemComponent
          label="Transferencias"
          to={appRoutes.transfer}
          routePrefix={routesPrefixes.transfer}
          pathname={pathname}
        />
      </ul>
    </nav>
  );
};
