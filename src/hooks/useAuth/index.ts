import { useEffect } from "react";
import { usersApi } from "../../api";
import { LoginFormType } from "../../types";

const useAuth = () => {
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

    console.log(logged);

    if (logged) {
      const token = await setUserToken(logged.id);

      if (token) {
        localStorage.setItem("user-token", token);
      }
    }
  };

  const loginWithToken = async () => {
    const users = await usersApi.getAll();

    const storedToken = localStorage.getItem("user-token");

    const logged = users.find((user) => user.sessionToken === storedToken);

    console.log(logged);
  };

  const logout = () => {
    usersApi.patch("-N8kYUgGnqkKTovcF5t3", { sessionToken: null });
  };

  return { login, logout };
};

export { useAuth };
