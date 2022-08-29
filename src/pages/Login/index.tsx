import { Layout, Login as LoginForm } from "../../components";
import { LoginType } from "./types";

const Login = () => {
  const handleSubmit = (formData: LoginType) => {
    console.log(formData);
  };

  return (
    <Layout hideNav page="login">
      <LoginForm onSubmit={handleSubmit} />
    </Layout>
  );
};

export { Login };