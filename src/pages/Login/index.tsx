import { Layout, Login as LoginForm } from "../../components";
import { useAuth } from "../../hooks/useAuth";
import { LoginFormType } from "../../types";

const Login = () => {
  const { login, logout } = useAuth();

  const handleSubmit = (formData: LoginFormType) => {
    login(formData);
  };

  return (
    <Layout hideNav page="login">
      <button onClick={logout}>Cerrar sesión</button>
      <LoginForm onSubmit={handleSubmit} />
    </Layout>
  );
};

export { Login };
