import { FC } from "react";
import { useForm } from "react-hook-form";
import { LoginFormType } from "../../../types";
import { Form, Alert, Button } from "react-bootstrap";

import { yupResolver } from "@hookform/resolvers/yup";
import { validationSchema } from "./validationSchema";
import { defaultValues } from "./defaultValues";

type Props = {
  onLogin: (formData: LoginFormType) => void;
  className?: string;
};

const Login: FC<Props> = ({ onLogin, className }) => {
  const { register, handleSubmit, formState } = useForm<LoginFormType>({
    resolver: yupResolver(validationSchema),
    defaultValues,
  });

  return (
    <form
      onSubmit={handleSubmit(onLogin)}
      className={`form-login ${className}`}
    >
      <div>
        <label htmlFor=""></label>
        <Form.Control
          type="email"
          placeholder="Ingresar email"
          {...register("email")}
        />

        <br />
        {formState.errors.email && (
          <Alert variant="danger">{formState.errors.email?.message}</Alert>
        )}
      </div>
      <div>
        <label htmlFor=""></label>
        <Form.Control
          type="password"
          placeholder="Ingresar email"
          {...register("pass")}
        />
        <br />
        {formState.errors.pass && (
          <Alert variant="danger">{formState.errors.pass?.message}</Alert>
        )}
      </div>
      <Button type="submit" variant="primary">
        Enviar
      </Button>
    </form>
  );
};

export { Login };
