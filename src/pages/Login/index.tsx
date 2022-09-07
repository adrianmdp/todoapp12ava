import { Layout, Login as LoginForm } from "../../components";
import { withAuth } from "../../hoc";
import { useAuth } from "../../hooks/useAuth";
import { LoginFormType } from "../../types";

const LoginPage = () => {
  const { login } = useAuth();

  const handleSubmit = (formData: LoginFormType) => {
    login(formData);
  };

  return (
    <Layout hideNav page="login">
      <LoginForm onSubmit={handleSubmit} />
    </Layout>
  );
};

export const Login = withAuth(LoginPage);
