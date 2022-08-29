import { createContext, FC, ReactNode, useState } from "react";

type ContextType = {
  status: string;
  theme: string;
  changeTheme: (newTheme: string) => void;
};

const PruebaContext = createContext<ContextType>({
  status: "",
  theme: "",
  changeTheme: (newTheme: string) => {},
});

type Props = {
  children: ReactNode;
};

const PruebaProvider: FC<Props> = ({ children }) => {
  const [estado, setEstado] = useState("active");
  const [tema, setTema] = useState("dark");

  const changeTheme = (newTheme: string) => {
    setTema(newTheme);
  };

  return (
    <PruebaContext.Provider
      value={{ status: estado, theme: tema, changeTheme }}
    >
      {children}
    </PruebaContext.Provider>
  );
};

export { PruebaProvider, PruebaContext };
