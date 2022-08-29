import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useOtherHook } from "./hooks/useOtherHook";

const Test2 = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const { state1, fx1, fx2 } = useOtherHook();

  const navigate = useNavigate();

  useEffect(() => {
    console.log("useEffect en el test 2");
  }, [name]);

  const func1 = () => {
    return null;
  };

  return (
    <div>
      Hola Mundo
      <button onClick={() => navigate("/test")}>Ir a test 1</button>
      <h1>{state1}</h1>
      <button
        onClick={() => {
          fx1("Adrián");
        }}
      >
        Set Nombre
      </button>
    </div>
  );
};

export { Test2 };
