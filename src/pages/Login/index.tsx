import { Layout, Login as LoginForm } from "../../components";
import { withAuth } from "../../hoc";
import { useAuth } from "../../hooks/useAuth";
import { LoginFormType } from "../../types";

import "./styles.scss";

const LoginPage = () => {
  const { login } = useAuth();

  const handleSubmit = (formData: LoginFormType) => {
    login(formData);
  };

  return (
    <Layout hideHeader hideNav hideFooter page="login">
      <LoginForm onLogin={handleSubmit} />
    </Layout>
  );
};

export const Login = withAuth(LoginPage);
