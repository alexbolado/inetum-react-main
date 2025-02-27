import { useProfileContext } from "@/core/profile";
import classes from "./header.component.module.css";
import logoHeader from "/assets/logo_header_white.svg";

export const HeaderComponent: React.FC = () => {
  const { username } = useProfileContext();
  return (
    <header className={classes.header}>
      <div>
        <img src={logoHeader} className={classes.headerLogo} />
        <div className={classes.usuario}>
          <p>{username}</p>
        </div>
      </div>
    </header>
  );
};
