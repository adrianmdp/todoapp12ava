import { useContext, useEffect, useState } from "react";
import { usersApi } from "../../api";
import { AuthContext } from "../../contexts/auth";
import { LoginFormType, User } from "../../types";

const useAuth = () => {
  const { me, setCurrentUser } = useContext(AuthContext);

  useEffect(() => {
    loginWithToken();
  }, []);

  const setUserToken = async (id: string) => {
    const newToken = Math.random().toString(36).substr(2);
    const rsp = await usersApi.patch(id, { sessionToken: newToken });
    return rsp ? newToken : null;
  };

  const login = async ({ email, pass }: LoginFormType) => {
    const users = await usersApi.getAll();

    const logged = users.find(
      (user) => user.email === email && user.pass === pass
    );

    console.log(users, logged);

    if (logged) {
      const token = await setUserToken(logged.id);

      if (token) {
        localStorage.setItem("user-token", token);
        setCurrentUser(logged);
      }
    }
  };

  const loginWithToken = async () => {
    const users = await usersApi.getAll();

    const storedToken = localStorage.getItem("user-token");

    const logged = users.find((user) => user.sessionToken === storedToken);

    if (!me && logged) {
      setCurrentUser(logged);
    }
  };

  const logout = () => {
    usersApi.patch("-N8kYUgGnqkKTovcF5t3", { sessionToken: null });
    setCurrentUser(undefined);
  };

  return { me, login, logout };
};

export { useAuth };
