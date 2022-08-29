import { useContext } from "react";
import { PruebaContext } from "../../contexts/Prueba";

const Header = () => {
  const { theme, changeTheme } = useContext(PruebaContext);

  return (
    <header className="header">
      Logo
      <button onClick={() => changeTheme("light")}>
        Cambiar tema ({theme})
      </button>
      <form action="">Buscar</form>
    </header>
  );
};

export { Header };
