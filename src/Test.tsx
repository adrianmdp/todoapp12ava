import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useOtherHook } from "./hooks/useOtherHook";

const Test = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const { state1 } = useOtherHook();

  const navigate = useNavigate();

  useEffect(() => {
    console.log("useEffect en el componente");
  }, [name]);

  const func1 = () => {
    return null;
  };

  const func2 = () => {
    return null;
  };

  return (
    <div>
      Hola Mundo
      <button onClick={() => navigate("/test2")}>Ir a test 2</button>
      <hr />
      <h1>{name}</h1>
      <h2>{state1}</h2>
      <button
        onClick={() => {
          setName("Adrián");
        }}
      >
        Set Nombre
      </button>
    </div>
  );
};

export { Test };
