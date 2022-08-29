import { useContext } from "react";
import { PruebaContext } from "../../contexts/Prueba";

const Footer = () => {
  const { theme } = useContext(PruebaContext);

  return (
    <footer className="footer">
      Footer ({theme})<nav></nav>
    </footer>
  );
};

export { Footer };
