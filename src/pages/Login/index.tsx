import { useEffect, useState } from "react";
import { Layout } from "../../components";
import { Prueba } from "./components";

const Login = () => {
  const [show, setShow] = useState(false);

  return (
    <Layout hideNav page="login">
      Login
      <br />
      {show && <Prueba />}
      <button onClick={() => setShow((prevState) => !prevState)}>
        Mostrar Prueba
      </button>
      <div id="ej">Esto se muestra cuando prueba esta oculto</div>
    </Layout>
  );
};

export { Login };
