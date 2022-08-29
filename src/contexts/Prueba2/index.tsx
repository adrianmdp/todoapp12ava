import { createContext, FC, ReactNode, useEffect, useState } from "react";
import { usersApi } from "../../api";

const Prueba2Context = createContext({
  user: {},
  isAdmin: false,
});

type ProviderType = {
  children: ReactNode;
};

const Prueba2Provider: FC<ProviderType> = ({ children }) => {
  const [user, setUser] = useState({});
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    usersApi.get("-N8kYUgGnqkKTovcF5t3").then((data) => {
      if (data.role === "admin") {
        setIsAdmin(true);
      }
      setUser(data);
    });
  }, []);

  return (
    <Prueba2Context.Provider value={{ isAdmin, user }}>
      {children}
    </Prueba2Context.Provider>
  );
};

export { Prueba2Context, Prueba2Provider };
