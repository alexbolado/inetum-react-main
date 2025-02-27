import { Link } from "react-router-dom";
import classes from "./navbar.component.module.css";

interface Props {
  to: string;
  label: string;
  routePrefix: string;
  pathname: string;
}

export const LinkItemComponent: React.FC<Props> = (props) => {
  const { to, label, routePrefix, pathname } = props;

  return (
    <li className={pathname.startsWith(routePrefix) ? classes.selected : ""}>
      <Link to={to}>{label}</Link>
    </li>
  );
};
