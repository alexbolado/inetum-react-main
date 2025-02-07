import logo from "/logo_lemoncode.png";

interface Props {
  children: React.ReactNode;
}

export const Layout: React.FC<Props> = (props) => {
  const { children } = props;
  return (
    <div className="layout-contenedor">
      <header className="layout-header">
        <h1>Lista de miembros de lemoncode</h1>
        <p>Bienvenido X</p>
      </header>
      <div className="container">{children}</div>
      <footer className="layout-footer">
        <img src={logo} alt="logo" />
      </footer>
    </div>
  );
};
