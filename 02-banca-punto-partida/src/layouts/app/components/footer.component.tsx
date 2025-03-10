import logoFooter from "/assets/logo_footer.svg";
import classes from "./footer.component.module.css";
export const FooterComponent: React.FC = () => {
  return (
    <footer className={classes.footer}>
      <img src={logoFooter} alt="logo" className={classes.footerLogo} />
    </footer>
  );
};
