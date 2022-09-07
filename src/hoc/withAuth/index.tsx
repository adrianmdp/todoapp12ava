import { FC, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

// Verficar si existe una sesión activa y en caso de no existir
// carga la pagina de Login.
// Si hay un usuario en sesión, entonces se carga el componente
// actual o, si vengo de login o signup, tengo que enviar a
// la pagina principal.

const publicRoutes = ["/login", "/signup"];

const withAuth = (Component: FC): FC => {
  const Authenticated: FC = (): any => {
    const { me } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
      if (me && publicRoutes.includes(location.pathname)) {
        navigate("/test");
      }

      if (!me && !publicRoutes.includes(location.pathname)) navigate("/login");
    }, [me]);

    return <Component />;
  };

  return Authenticated;
};

export { withAuth };
