import { FC, useState } from "react";
import { LoginFormType } from "../../../types";

type Props = {
  onSubmit: (formData: LoginFormType) => void;
};

const inicialData: LoginFormType = {
  email: "",
  pass: "",
};

const Login: FC<Props> = ({ onSubmit }) => {
  const [formData, setFormData] = useState(inicialData);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(formData);
      }}
    >
      <div>
        <label htmlFor=""></label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={(e) => {
            setFormData((prevState) => ({
              ...prevState,
              email: e.target.value,
            }));
          }}
        />
      </div>
      <div>
        <label htmlFor=""></label>
        <input
          type="password"
          name="pass"
          value={formData.pass}
          onChange={(e) => {
            setFormData((prevState) => ({
              ...prevState,
              pass: e.target.value,
            }));
          }}
        />
      </div>
      <button type="submit">Iniciar sesión</button>
    </form>
  );
};

export { Login };
